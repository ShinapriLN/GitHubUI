"use server";
import axios from "axios";

export async function userFetching(username: string) {
  const result = await axios.get(`http://localhost:3000/api/user/${username}`);
  return result.data;
}

export async function repoFetching(username: string) {
  const result = await axios.get(`http://localhost:3000/api/repo/${username}`);
  return result.data;
}
