package lk.note.ne.data.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String content;
    private LocalDateTime date;
    private String tags;


    @PrePersist
    private void prePersist() {
        date = LocalDateTime.now();
    }

}
