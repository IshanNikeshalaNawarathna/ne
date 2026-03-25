package lk.note.ne.domain.model;

import lombok.Data;

import java.util.UUID;

@Data
public class NeModel {
    private UUID id;
    private String title;
    private String description;
}
