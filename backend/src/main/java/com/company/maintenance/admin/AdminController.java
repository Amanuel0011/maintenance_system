package com.company.maintenance.admin;

import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
    @GetMapping("/dashboard")
    public ResponseEntity<Map<String, Object>> dashboard() {
        return ResponseEntity.ok(Map.of("users", 12, "workersPending", 3, "bookings", 21));
    }

    @PatchMapping("/workers/{id}/approve")
    public ResponseEntity<Map<String, String>> approveWorker(@PathVariable Long id) {
        return ResponseEntity.ok(Map.of("message", "Worker " + id + " approved"));
    }

    @PatchMapping("/workers/{id}/reject")
    public ResponseEntity<Map<String, String>> rejectWorker(@PathVariable Long id) {
        return ResponseEntity.ok(Map.of("message", "Worker " + id + " rejected"));
    }
}
