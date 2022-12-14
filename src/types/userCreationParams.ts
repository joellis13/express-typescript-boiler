import { User } from "../models";

export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;
