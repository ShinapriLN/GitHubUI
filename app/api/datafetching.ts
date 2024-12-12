"use server";
import axios from "axios";

const baseUlr = "https://git-hub-ui-hazel.vercel.app";

export async function userFetching(username: string) {
  const result = await axios.get(`${baseUlr}/api/user/${username}`);
  return result.data;
}

export async function repoFetching(username: string) {
  const result = await axios.get(`${baseUlr}/api/repo/${username}`);
  return result.data;
}
