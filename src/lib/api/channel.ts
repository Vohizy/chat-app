import { InstanceAxiosUrl } from "@/conf/axios";
import { Auth, User } from "./user";

export type owner = Pick<User, "name" | "email"> & {
  id: number;
};
export type responsChannelType = {
  status: boolean;
  channels: channel[];
};

export type channel = {
  name: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  ownerId: number;
  owner: owner;
};
export type reqBodyChannel = Pick<channel, "name" | "type"> & {
  member: number;
};

export const createChannel = async (token: string, reqBody: reqBodyChannel) => {
  return await InstanceAxiosUrl.post<channel>(
    "/channel",
    reqBody,
    Auth(token)
  ).then((res) => res.data);
};

export const addMemberToChannel = async (
  token: string,
  channelId: number,
  reqBody: number[]
) => {
  return await InstanceAxiosUrl.post(
    `/channels/${channelId}/members`,
    reqBody,
    Auth(token)
  ).then((res) => res.data);
};

export const getChannel = async (token: string) => {
  return await InstanceAxiosUrl.get<responsChannelType>(
    "/channels",
    Auth(token)
  ).then((res) => res.data);
};

export const getChannelById = async (token: string, channelId: number) => {
  return await InstanceAxiosUrl.get<channel>(
    `/channel/${channelId}`,
    Auth(token)
  ).then((res) => res.data);
};
