import { httpClient } from "./httpClient";

async function list() {
  const { data } = await httpClient.get("contact/index");

  return data;
}

export const listContacts = {
  list,
};
