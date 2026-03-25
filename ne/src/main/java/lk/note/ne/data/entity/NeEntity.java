package lk.note.ne.data.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "BINARY(8)")
    private UUID id;
    private String title;
    private String description;
    private LocalDateTime created;
    private LocalDateTime updated;


    @PreUpdate
    private void preUpdate() {
        updated = LocalDateTime.now();
    }

    @PrePersist
    private void prePersist() {
        created = LocalDateTime.now();
    }

}
