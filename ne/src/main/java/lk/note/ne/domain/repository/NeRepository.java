package lk.note.ne.domain.repository;

import lk.note.ne.domain.model.NeModel;

import java.util.List;
import java.util.UUID;

public interface NeRepository {
    NeModel save(NeModel neModel);
    NeModel update(UUID id, NeModel neModel);
    NeModel delete(UUID id);
    List<NeModel> findAll();
}
