package com.masprogtechs.backend.service;

import com.masprogtechs.backend.dto.match.MatchResponseDTO;
import com.masprogtechs.backend.dto.team.TeamResponseDTO;
import com.masprogtechs.backend.exception.EntityRuntimeException;
import com.masprogtechs.backend.model.Match;
import com.masprogtechs.backend.model.Team;
import com.masprogtechs.backend.repository.MatchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MatchService {
    private final MatchRepository matchRepository;

    public List<Match> getAllMatches() {
        return matchRepository.findAllOrderedById();
    }

    public MatchResponseDTO getMatchById(Long id) {
        Optional<Match> response = matchRepository.findById(id);
        return response.map(MatchResponseDTO::new).orElseThrow(() ->new EntityRuntimeException(String.format("Partida %s não encontrada", id)));
    }
}
