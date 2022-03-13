export class User {
  id: number;
  name: string;
  surname: string;
  email: string;
  attendanceStatus: number;
  picture: string;

  constructor(
    id: number,
    name: string,
    surname: string,
    email: string,
    attendanceStatus: number,
    picture: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.attendanceStatus = attendanceStatus;
    this.picture = picture;
  }
}
export interface UserRegister {
  name: string;
  surname: string;
  email: string;
  username: string;
  password: string;
  repeatPassword?: string;
}

export type IUser = Omit<UserRegister, "repeatPassword">;

export interface UserLogin {
  username: string;
  password: string;
}
