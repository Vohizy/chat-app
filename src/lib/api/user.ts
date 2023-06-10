import { InstanceAxiosUrl } from "@/conf/axios";
export const Auth = (token: string): {} => ({
  headers: {
    Authorization: "Bearer " + token,
  },
});
export type User = {
  bio: string | null;
  createdAt?: string;
  deletedAt?: string | null;
  email: string;
  googleId?: string | null;
  name: string;
};

type objectResUser<T, obj extends string> = {
  status: boolean;
} & {
  [p in obj]: T;
};
type objects = {
  status: boolean;
} & {
  user: User;
};

export const takeRes = (data: objects, useData: string) => {
  return data.user;
};

export const getUsers = async (token: string) => {
  return await InstanceAxiosUrl.get<objects>("/user", Auth(token)).then((res) =>
    takeRes(res.data, "user")
  );
};
export type CreatePayload = {
  password: string;
} & Pick<User, "name" | "bio" | "email">;

export const createUsers = async (userCreate: CreatePayload) => {
  return await InstanceAxiosUrl.post<objects>("/users", userCreate).then(
    (res) => res.data
  );
};
export const getAllUsers = async (token: string) => {
  return await InstanceAxiosUrl.get<objects[]>("/users", Auth(token)).then(
    (res) => res.data
  );
};
