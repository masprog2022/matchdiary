package com.masprogtechs.backend.dto.team;

import com.masprogtechs.backend.model.Team;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TeamResponseDTO {
    private Long id;
    private String name;
    private String state;
    private String photoUrl;

    public TeamResponseDTO(Team team) {
        this(team.getId(), team.getName(), team.getState(), team.getPhotoUrl());
    }
}
