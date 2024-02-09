package com.masprogtechs.backend.controller;

import com.masprogtechs.backend.dto.reports.ReportsResponseDTO;
import com.masprogtechs.backend.service.ReportsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reports")
@RequiredArgsConstructor
public class ReportsController {

    private final ReportsService reportsService;
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    private ReportsResponseDTO getReports() {
        return reportsService.getAllReports();
    }
}
