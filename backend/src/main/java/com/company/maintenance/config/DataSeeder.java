package com.company.maintenance.config;

import com.company.maintenance.users.Role;
import com.company.maintenance.users.User;
import com.company.maintenance.users.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataSeeder(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        seed("Admin User", "admin@maintenance.com", "Admin123!", Role.ADMIN);
        seed("Customer Demo", "customer@maintenance.com", "Customer123!", Role.CUSTOMER);
        seed("Worker Demo", "worker@maintenance.com", "Worker123!", Role.WORKER);
        seed("Bekele Electrician", "bekele.worker@maintenance.com", "Worker123!", Role.WORKER);
    }

    private void seed(String fullName, String email, String password, Role role) {
        if (userRepository.existsByEmail(email)) {
            return;
        }
        User user = new User();
        user.setFullName(fullName);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(role);
        user.setEnabled(true);
        userRepository.save(user);
    }
}
