package com.masprogtechs.backend.dto.reports;

import com.masprogtechs.backend.model.Team;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReportsResponseDTO {

    private Integer matchesQuantity;
    private Integer winsQuantity;
    private Integer winPercentage;
    private Team mostWatchedTeam;
    private Integer daysWithoutWatching;

}
