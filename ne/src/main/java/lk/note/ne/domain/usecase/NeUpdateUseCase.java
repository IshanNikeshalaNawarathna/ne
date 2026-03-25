package lk.note.ne.domain.usecase;

import lk.note.ne.domain.model.NeModel;
import lk.note.ne.domain.repository.NeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class NeUpdateUseCase {

    private final NeRepository neRepository;

    public NeModel update(UUID id,NeModel neModel) {
        return neRepository.update(id,neModel);
    }

}
