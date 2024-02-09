package com.masprogtechs.backend.model;


import com.masprogtechs.backend.dto.team.TeamRequestDTO;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "team")
@Entity(name = "team")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "state")
    private String state;
    @Column(name = "photo_url")
    private String photoUrl;

    public Team(TeamRequestDTO teamRequestDTO) {
        this.id = teamRequestDTO.getId();
        this.name = teamRequestDTO.getName();
        this.state = teamRequestDTO.getState();
        this.photoUrl = teamRequestDTO.getPhotoUrl();
    }

}
