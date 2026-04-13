package lk.note.ne.persentation.controller;


import lk.note.ne.domain.model.NeModel;
import lk.note.ne.domain.usecase.NeAllUseCase;
import lk.note.ne.domain.usecase.NeDeleteUseCase;
import lk.note.ne.domain.usecase.NeSaveUseCase;
import lk.note.ne.domain.usecase.NeUpdateUseCase;
import lk.note.ne.persentation.dto.Note;
import lk.note.ne.persentation.mapper.NeDtoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/ne")
@RequiredArgsConstructor
public class NeController {

    private final NeSaveUseCase save;
    private final NeUpdateUseCase update;
    private final NeDeleteUseCase delete;
    private final NeAllUseCase list;
    private final NeDtoMapper mapper;


    @PostMapping
    public ResponseEntity<Note> saveNote(@RequestBody Note neRequest) {
        System.out.println("note " + neRequest);
        NeModel model = mapper.toModel(neRequest);
        return new ResponseEntity<>(mapper.toDto(save.save(model)), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable UUID id) {
        delete.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@RequestBody Note neRequest, @PathVariable UUID id) {
        NeModel model = mapper.toModel(neRequest);
        return ResponseEntity.ok(mapper.toDto(update.update(id, model)));
    }

    @GetMapping
    public ResponseEntity<List<Note>> getAllNotes() {
        List<NeModel> all = list.findAll();
        List<Note> allList = all.stream().map(neModel -> mapper.toDto(neModel)).toList();
        return ResponseEntity.ok(allList);
    }


}
