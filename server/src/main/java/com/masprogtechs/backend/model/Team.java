package com.masprogtechs.backend.model;


import jakarta.persistence.*;
import lombok.*;

@Table(name = "team")
@Entity
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
}
