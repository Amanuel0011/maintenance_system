package com.company.maintenance.auth.dto;

import com.company.maintenance.users.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record RegisterDto(
    @NotBlank String fullName,
    @Email @NotBlank String email,
    @NotBlank String password,
    @NotNull Role role
) {}
