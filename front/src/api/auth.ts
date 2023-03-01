import {fetcher} from "../helpers/fetcher";
import {Auth, AuthPayload} from "../models/auth";

export const auth = {
  signIn: (data: Auth): Promise<AuthPayload | undefined> =>
    fetcher("http://localhost:3002/login", {
      data,
      method: "POST",
    }),
  signOut: () => fetcher("http://localhost:3002/logout", {method: "POST"}),
  signUp: (data: Auth): Promise<AuthPayload | undefined> =>
    fetcher("http://localhost:3002/signup", {data, method: "POST"}),
};
