package com.company.maintenance.auth.service;

import com.company.maintenance.auth.dto.LoginDto;
import com.company.maintenance.auth.dto.LoginResponseDto;
import com.company.maintenance.auth.dto.RegisterDto;
import com.company.maintenance.auth.jwt.JwtService;
import com.company.maintenance.users.User;
import com.company.maintenance.users.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthService(
        UserRepository userRepository,
        PasswordEncoder passwordEncoder,
        AuthenticationManager authenticationManager,
        JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public LoginResponseDto register(RegisterDto dto) {
        if (userRepository.existsByEmail(dto.email())) {
            throw new IllegalArgumentException("Email already exists");
        }

        User user = new User();
        user.setFullName(dto.fullName());
        user.setEmail(dto.email());
        user.setPassword(passwordEncoder.encode(dto.password()));
        user.setRole(dto.role());
        user.setEnabled(true);
        userRepository.save(user);

        String token = jwtService.generateToken(
            org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole().name())
                .build()
        );
        return new LoginResponseDto(token, user.getRole().name(), user.getFullName());
    }

    public LoginResponseDto login(LoginDto dto) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(dto.email(), dto.password())
        );

        User user = userRepository.findByEmail(dto.email())
            .orElseThrow(() -> new IllegalArgumentException("Invalid credentials"));
        String token = jwtService.generateToken(
            org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole().name())
                .build()
        );
        return new LoginResponseDto(token, user.getRole().name(), user.getFullName());
    }
}
