export type Company = {
    handle: string;
    name: string;
    numEmployees: number | null;
    description: string;
    logoUrl: string | null;
    jobs: Job[] | null;
};

export type Job = {
    id: number;
    title: string;
    salary: number | null;
    equity: number | null;
    companyHandle: string
};

export type User = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
}
export interface LoginData {
    username: string;
    password: string;
  }
export interface SignupData {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
  }
export interface UpdateProfileData {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
  }
  
export type LoginFunction = (data: LoginData) => Promise<{ success: boolean; error?: any }>;
export type SignupFunction = (data: SignupData) => Promise<{ success: boolean; error?: any }>;
export type UpdateProfileFunction = (data: UpdateProfileData) => Promise<{ success: boolean; error?: any }>;
export interface LogoutFunction {
    (): void;
  }

export interface AuthFuncProp {
    login: LoginFunction;
    signup: SignupFunction;
    // updateProfile: UpdateProfileFunction;
}
export interface LoginFuncProp {
    login: LoginFunction;
}
export interface SignupFuncProp {
    signup: SignupFunction
}
export interface UpdateProfileFuncProp {
    updateProfile?: UpdateProfileFunction
}

export interface NavBarProps {
    logout: LogoutFunction;
  }



