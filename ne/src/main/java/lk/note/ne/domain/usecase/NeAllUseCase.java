package lk.note.ne.domain.usecase;

import lk.note.ne.domain.model.NeModel;
import lk.note.ne.domain.repository.NeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class NeAllUseCase {

    private final NeRepository neRepository;

    public List<NeModel> findAll() {
        return neRepository.findAll();
    }

}
