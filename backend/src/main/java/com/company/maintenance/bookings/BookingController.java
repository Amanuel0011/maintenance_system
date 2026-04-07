package com.company.maintenance.bookings;

import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    @PostMapping
    @PreAuthorize("hasAnyRole('CUSTOMER','ADMIN')")
    public ResponseEntity<Map<String, Object>> createBooking(@RequestBody Map<String, Object> payload) {
        return ResponseEntity.ok(Map.of("status", "PENDING", "booking", payload));
    }

    @GetMapping("/my")
    @PreAuthorize("hasAnyRole('CUSTOMER','WORKER','ADMIN')")
    public ResponseEntity<List<Map<String, Object>>> myBookings() {
        return ResponseEntity.ok(List.of(Map.of("id", 1, "status", "PENDING")));
    }
}
