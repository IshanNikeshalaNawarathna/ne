package lk.note.ne.persentation.dto;

import lombok.Data;

import java.util.Set;

@Data
public class Note {

    private String id;
    private String title;
    private String content;
    private String date;
    private String tags;

}
