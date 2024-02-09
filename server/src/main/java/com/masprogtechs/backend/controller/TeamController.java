package com.masprogtechs.backend.controller;

import com.masprogtechs.backend.dto.team.TeamRequestDTO;
import com.masprogtechs.backend.dto.team.TeamResponseDTO;
import com.masprogtechs.backend.model.Team;
import com.masprogtechs.backend.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/team")
@RequiredArgsConstructor
public class TeamController {
    private final TeamService teamService;

    @GetMapping("/all")
    public List<Team> getAllTeams() {
        return teamService.getAllTeams();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamResponseDTO> getTeamById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(teamService.getTeamById(id));
    }

    @PostMapping
    public ResponseEntity<Team> addTeam(@RequestBody TeamRequestDTO teamRequestDTO) {
        return ResponseEntity.ok(teamService.registerTeam(teamRequestDTO));
    }

    @PutMapping
    public ResponseEntity<Team> updateTeam(@RequestBody TeamRequestDTO teamRequestDTO) {
        return ResponseEntity.ok(teamService.updateTeam(teamRequestDTO));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteResource(@PathVariable Long id) {
        teamService.deleteTeam(id);
        return ResponseEntity.noContent().build();
    }


}
