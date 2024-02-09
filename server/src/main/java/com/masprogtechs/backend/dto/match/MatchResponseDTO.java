package com.masprogtechs.backend.dto.match;

import com.masprogtechs.backend.model.Match;
import com.masprogtechs.backend.model.Team;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MatchResponseDTO {
    private Long id;
    private Date date;
    private Integer scoreTeamOne;
    private Integer scoreTeamTwo;
    private Team teamOne;
    private Team teamTwo;
    private Team supportedTeam;

    public MatchResponseDTO(Match match) {
        this(match.getId(), match.getDate(), match.getScoreTeamOne(),
                match.getScoreTeamTwo(), match.getTeamOne(), match.getTeamTwo(), match.getSupportedTeam());
    }
}
