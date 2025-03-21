import { UserDto } from "@/generate-api";
import { DataUserTableType } from "@/features/user/components/UserTable/constants";

export const toDataUserTable = (user: UserDto): DataUserTableType => {
  return {
    id: user.id,
    image: user.image,
    email: user.email,
    fullName: user.fullName,
    createdAt: user.createdAt,
  };
};
