package lk.note.ne.data.repository;

import lk.note.ne.domain.model.NeModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NeJpaRepo extends JpaRepository<NeModel, UUID> {
}
