package lk.note.ne.domain.model;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Data
public class NeModel {
    private UUID id;
    private String title;
    private String content;
    private LocalDateTime date;
    private String tags;

}
