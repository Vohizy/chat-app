import { InstanceAxiosUrl } from "@/conf/axios";
import { Auth } from "./user";
export const createChannel = async (token: string) => {
  return await InstanceAxiosUrl.post("/channel", Auth(token)).then(
    (res) => res.data
  );
};

export const addMemberToChannel = async (token: string, channelId: number) => {
  return await InstanceAxiosUrl.post(
    `/channels/${channelId}/members`,
    Auth(token)
  ).then((res) => res.data);
};

export const getChannel = async (token: string) => {
  return await InstanceAxiosUrl.get("/channels", Auth(token)).then(
    (res) => res.data
  );
};

export const getChannelById = async (token: string, channelId: number) => {
  return await InstanceAxiosUrl.get(`/channel/${channelId}`, Auth(token)).then(
    (res) => res.data
  );
};
