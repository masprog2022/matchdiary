package com.masprogtechs.backend.service;

import com.masprogtechs.backend.dto.match.MatchRequestDTO;
import com.masprogtechs.backend.dto.match.MatchResponseDTO;
import com.masprogtechs.backend.dto.team.TeamResponseDTO;
import com.masprogtechs.backend.exception.EntityRuntimeException;
import com.masprogtechs.backend.model.Match;
import com.masprogtechs.backend.model.Team;
import com.masprogtechs.backend.repository.MatchRepository;
import com.masprogtechs.backend.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MatchService {
    private final MatchRepository matchRepository;

    private final TeamRepository teamRepository;

    public List<Match> getAllMatches() {
        return matchRepository.findAllOrderedById();
    }

    public MatchResponseDTO getMatchById(Long id) {
        Optional<Match> response = matchRepository.findById(id);
        return response.map(MatchResponseDTO::new).orElseThrow(() ->new EntityRuntimeException(String.format("Partida %s não encontrada", id)));
    }

    public Match registerMatch(final MatchRequestDTO matchRequestDTO) {
        if(matchRequestDTO.getScoreTeamOne().toString().isEmpty() ||
                matchRequestDTO.getScoreTeamTwo().toString().isEmpty() ||
                matchRequestDTO.getSupportedTeamId().toString().isEmpty() ||
                matchRequestDTO.getTeamOneId().toString().isEmpty() ||
                matchRequestDTO.getTeamTwoId().toString().isEmpty()
        ) {
            return null;
        }

        if(matchRequestDTO.getTeamOneId().equals(matchRequestDTO.getTeamTwoId())) {
            return null;
        }

        Date formattedDate = matchRequestDTO.getDate();
        formattedDate.setHours(0);
        formattedDate.setMinutes(0);
        formattedDate.setSeconds(0);

        matchRequestDTO.setDate(formattedDate);

        Team teamOne = teamRepository.findById(matchRequestDTO.getTeamOneId()).orElseThrow(() -> new IllegalArgumentException("Time 1 não encontrado"));
        Team teamTwo = teamRepository.findById(matchRequestDTO.getTeamTwoId()).orElseThrow(() -> new IllegalArgumentException("Time 2 não encontrado"));
        Team supportedTeam = teamRepository.findById(matchRequestDTO.getSupportedTeamId()).orElseThrow(() -> new IllegalArgumentException("Time de torcida não encontrado"));

        Match match = new Match(matchRequestDTO, teamOne, teamTwo, supportedTeam);
        return matchRepository.save(match);
    }
}
