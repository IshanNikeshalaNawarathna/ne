package lk.note.ne.persentation.mapper;

import lk.note.ne.domain.model.NeModel;
import lk.note.ne.persentation.dto.NeRequest;
import lk.note.ne.persentation.dto.NeResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface NeDtoMapper {

    NeModel toModel(NeRequest neRequest);
    NeResponse toDto(NeModel neModel);

}
