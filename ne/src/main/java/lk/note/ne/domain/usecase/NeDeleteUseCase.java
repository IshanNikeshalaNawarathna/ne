package lk.note.ne.domain.usecase;

import lk.note.ne.domain.model.NeModel;
import lk.note.ne.domain.repository.NeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class NeDeleteUseCase {

    private final NeRepository neRepository;

    public void delete(UUID id) {
        neRepository.delete(id);
    }

}
