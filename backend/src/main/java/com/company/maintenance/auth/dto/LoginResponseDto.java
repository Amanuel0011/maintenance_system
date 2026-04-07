package com.company.maintenance.auth.dto;

public record LoginResponseDto(
    String token,
    String role,
    String fullName
) {}
