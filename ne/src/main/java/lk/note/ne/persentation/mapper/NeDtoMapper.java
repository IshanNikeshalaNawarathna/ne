package lk.note.ne.persentation.mapper;

import lk.note.ne.domain.model.NeModel;
import lk.note.ne.persentation.dto.Note;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface NeDtoMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "date", ignore = true)
    NeModel toModel(Note neRequest);

    Note toDto(NeModel neModel);
}