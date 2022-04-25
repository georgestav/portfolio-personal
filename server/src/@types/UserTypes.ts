export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: number;
  password: string;
  createdAt?: Date;
}

export interface IUserResponse {
  username: string;
  email: string;
  message: string;
}
