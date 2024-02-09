package com.masprogtechs.backend.repository;

import com.masprogtechs.backend.model.Match;
import com.masprogtechs.backend.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatchRepository extends JpaRepository<Match, Long> {

    @Query(value = "SELECT CAST(EXTRACT(EPOCH FROM AGE(CURRENT_DATE, MAX(date))) / (60*60*24) AS INTEGER) FROM match", nativeQuery = true)
    Integer getDaysWithoutWatching();
    @Query("SELECT m FROM match m ORDER BY m.date DESC")
    List<Match> findAllOrderedById();
}
