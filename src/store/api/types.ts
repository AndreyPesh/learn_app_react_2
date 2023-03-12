export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  photo: string;
}

export interface UserUpdateData {
  name: string;
  email: string;
  role: string;
  passwordRole?: string | null;
  image?: File;
}

export interface GenericResponse {
  status: number;
  data: {
    message: string;
    status: string;
  };
}

export interface ErrorResponse {
  status: number;
  data: {
    message: string;
    status: string;
  };
}
