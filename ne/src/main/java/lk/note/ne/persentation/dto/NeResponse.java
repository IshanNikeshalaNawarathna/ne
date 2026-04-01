package lk.note.ne.persentation.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class NeResponse {

    private UUID id;
    private String title;
    private String description;
    private LocalDateTime created;
    private LocalDateTime updated;

}
