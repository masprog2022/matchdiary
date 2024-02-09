package com.masprogtechs.backend.repository;

import com.masprogtechs.backend.model.Match;
import com.masprogtechs.backend.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatchRepository extends JpaRepository<Match, Long> {
    @Query("SELECT m FROM match m ORDER BY m.date DESC")
    List<Match> findAllOrderedById();
}
