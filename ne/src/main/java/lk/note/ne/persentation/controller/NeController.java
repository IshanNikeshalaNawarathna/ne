package lk.note.ne.persentation.controller;


import lk.note.ne.persentation.dto.NeRequest;
import lk.note.ne.persentation.dto.NeResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/ne")
public class NeController {


    @PostMapping
    public ResponseEntity<NeResponse> saveNote(@RequestBody NeRequest neRequest) {
        return new ResponseEntity<>(new NeResponse(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable UUID id) {
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<NeResponse> updateNote(@RequestBody NeRequest neRequest, @PathVariable UUID id) {
        return ResponseEntity.ok(new NeResponse());
    }

    @GetMapping
    public ResponseEntity<List<NeResponse>> getAllNotes() {
        return ResponseEntity.ok(new ArrayList<>());
    }


}
