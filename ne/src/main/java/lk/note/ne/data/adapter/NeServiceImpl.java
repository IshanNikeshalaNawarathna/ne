package lk.note.ne.data.adapter;

import jakarta.persistence.EntityNotFoundException;
import lk.note.ne.data.Mapper.NeJpaMapper;
import lk.note.ne.data.entity.NeEntity;
import lk.note.ne.data.repository.NeJpaRepo;
import lk.note.ne.domain.model.NeModel;
import lk.note.ne.domain.repository.NeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class NeServiceImpl implements NeRepository {

    private final NeJpaRepo jpa;
    private final NeJpaMapper mapper;

    @Override
    public NeModel save(NeModel neModel) {
        NeEntity entity = mapper.toeEntity(neModel);
        return mapper.toModel(jpa.save(entity));
    }

    @Override
    public NeModel update(UUID id, NeModel neModel) {
        NeEntity neEntity = jpa.findById(id).orElseThrow(() -> new EntityNotFoundException("NeEntity not found " + id));
        neEntity.setTitle(neModel.getTitle());
        neEntity.setDescription(neModel.getDescription());
        return mapper.toModel(jpa.save(neEntity));
    }

    @Override
    public void delete(UUID id) {
        NeEntity neEntity = jpa.findById(id).orElseThrow(() -> new EntityNotFoundException("NeEntity not found " + id));
        jpa.delete(neEntity);
    }

    @Override
    public List<NeModel> findAll() {
        List<NeEntity> all = jpa.findAll();
        return all.stream().map(neEntity -> mapper.toModel(neEntity)).toList();
    }
}
