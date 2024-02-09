package com.masprogtechs.backend.service;

import com.masprogtechs.backend.dto.team.TeamRequestDTO;
import com.masprogtechs.backend.dto.team.TeamResponseDTO;
import com.masprogtechs.backend.exception.EntityRuntimeException;
import com.masprogtechs.backend.model.Team;
import com.masprogtechs.backend.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TeamService {

    private final TeamRepository teamRepository;

    public List<Team> getAllTeams(){
        return teamRepository.findAllOrderedById();
    }

    public TeamResponseDTO getTeamById(Long id) {
        Optional<Team> response = teamRepository.findById(id);
        return response.map(TeamResponseDTO::new).orElseThrow(() ->new EntityRuntimeException(String.format("Equipe %s não encontrada", id)));
    }

    public Team registerTeam(TeamRequestDTO teamRequestDTO) {
        if(teamRequestDTO.getName().isEmpty()
                || teamRequestDTO.getState().isEmpty()
                || teamRequestDTO.getPhotoUrl().isEmpty()) {
            return null;
        }

        Team team = new Team(teamRequestDTO);
        return teamRepository.save(team);
    }


    public Team updateTeam(TeamRequestDTO teamRequestDTO) {

        if(teamRequestDTO.getName().isEmpty()
                || teamRequestDTO.getState().isEmpty()
                || teamRequestDTO.getPhotoUrl().isEmpty()) {
            return null;
        }

        Team team = new Team(teamRequestDTO);
        return teamRepository.save(team);
    }

    public void deleteTeam(Long id) {
        Team team = teamRepository.findById(id).orElse(null);

        if (team == null) {
            throw new EntityRuntimeException(String.format("Equipe %s não encontrada para ser removida", id));
        }

        teamRepository.deleteById(id);
    }
}
