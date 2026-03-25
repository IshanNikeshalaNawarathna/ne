package lk.note.ne.data.adapter;

import lk.note.ne.domain.model.NeModel;
import lk.note.ne.domain.repository.NeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class NeServiceImpl implements NeRepository {



    @Override
    public NeModel save(NeModel neModel) {
        return null;
    }

    @Override
    public NeModel update(UUID id, NeModel neModel) {
        return null;
    }

    @Override
    public NeModel delete(UUID id) {
        return null;
    }

    @Override
    public List<NeModel> findAll() {
        return List.of();
    }
}
