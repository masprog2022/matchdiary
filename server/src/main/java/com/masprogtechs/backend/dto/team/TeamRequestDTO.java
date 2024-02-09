package com.masprogtechs.backend.dto.team;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TeamRequestDTO {
    private Long id;
    private String name;
    private String state;
    private String photoUrl;
}
