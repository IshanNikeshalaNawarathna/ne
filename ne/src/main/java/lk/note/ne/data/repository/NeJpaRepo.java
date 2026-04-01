package lk.note.ne.data.repository;

import lk.note.ne.data.entity.NeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NeJpaRepo extends JpaRepository<NeEntity, UUID> {
}
