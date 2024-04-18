export interface UserDTO {
  firstName: string;
  lastName: string;
  userSignature: string;
  email: string;
  password: string;
}

export interface UserLoginDTO {
  email: string;
  password: string;
}
