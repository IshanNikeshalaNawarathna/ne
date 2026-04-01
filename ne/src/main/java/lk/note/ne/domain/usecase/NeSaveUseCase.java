package lk.note.ne.domain.usecase;

import lk.note.ne.domain.model.NeModel;
import lk.note.ne.domain.repository.NeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class NeSaveUseCase {

    private final NeRepository neRepository;

    public NeModel save(NeModel neModel) {
        return neRepository.save(neModel);
    }

}
