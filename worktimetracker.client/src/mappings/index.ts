import { createMap, createMapper, forMember, mapFrom } from "@automapper/core";
import { classes } from "@automapper/classes";
import { UserDto } from "@/generate-api";
import { DataUserTableType } from "@/features/user/components/UserTable/constants";

export const mapper = createMapper({
  strategyInitializer: classes(),
});

createMap(
  mapper,
  UserDto,
  DataUserTableType,
  forMember(
    (dest) => dest.key,
    mapFrom((source) => source.id)
  )
);
