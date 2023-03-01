export type Auth = {
  email: string;
  password: string;
};

export interface AuthPayload {
  data: {
    data: User;
  };
  headers: Headers;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
