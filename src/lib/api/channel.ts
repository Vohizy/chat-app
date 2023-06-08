import { InstanceAxiosUrl } from "@/conf/axios";
import { Auth } from "./user";
export const createChannel = async (token: string) => {
  return await InstanceAxiosUrl("/channel", Auth(token)).then(
    (res) => res.data
  );
};

export const addMemberToChannel = async (token: string, channelId: number) => {
  return await InstanceAxiosUrl(
    "/channels?channelId=" + channelId + "/members",
    Auth(token)
  ).then((res) => res.data);
};

export const getChannel = async (token: string) => {
  return await InstanceAxiosUrl("/channels", Auth(token)).then(
    (res) => res.data
  );
};

export const getChannelById = async (token: string, channelId: number) => {
  return await InstanceAxiosUrl(
    "/channel?channelId=" + channelId,
    Auth(token)
  ).then((res) => res.data);
};
