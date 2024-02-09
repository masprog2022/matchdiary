package com.masprogtechs.backend.dto.match;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MatchRequestDTO {
    private Long id;
    private Date date;
    private Integer scoreTeamOne;
    private Integer scoreTeamTwo;
    private Long teamOneId;
    private Long teamTwoId;
    private Long supportedTeamId;
}
