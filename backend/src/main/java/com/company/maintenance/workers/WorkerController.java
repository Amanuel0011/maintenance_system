package com.company.maintenance.workers;

import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/workers")
public class WorkerController {
    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> getWorkers() {
        return ResponseEntity.ok(List.of(
            Map.of("id", 1, "name", "Abel Tadesse", "profession", "Plumber", "city", "Addis Ababa", "rating", 4.8),
            Map.of("id", 2, "name", "Meron Alemu", "profession", "Electrician", "city", "Adama", "rating", 4.7)
        ));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getWorkerById(@PathVariable Long id) {
        return ResponseEntity.ok(Map.of("id", id, "name", "Demo Worker", "profession", "Technician"));
    }
}
