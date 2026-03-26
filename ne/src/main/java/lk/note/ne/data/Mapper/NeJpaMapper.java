package lk.note.ne.data.Mapper;

import lk.note.ne.data.entity.NeEntity;
import lk.note.ne.domain.model.NeModel;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface NeJpaMapper {

    NeModel toModel(NeEntity neEntity);

    NeEntity toEntity(NeModel neModel);
}