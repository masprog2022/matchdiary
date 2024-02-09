package com.masprogtechs.backend.repository;

import com.masprogtechs.backend.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Long> {

    @Query("SELECT t FROM team t ORDER BY t.id ASC")
    List<Team> findAllOrderedById();
}
