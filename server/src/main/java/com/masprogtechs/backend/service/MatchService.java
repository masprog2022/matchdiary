package com.masprogtechs.backend.service;

import com.masprogtechs.backend.model.Match;
import com.masprogtechs.backend.repository.MatchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MatchService {
    private final MatchRepository matchRepository;

    public List<Match> getAllMatches() {
        return matchRepository.findAllOrderedById();
    }
}
