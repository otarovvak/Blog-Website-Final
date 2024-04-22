import { signUpQuery } from "./api/signUp";
import { logInQuery } from "./api/logIn";

export const signUp = async (username: string, password: string) => {
    return await signUpQuery(username, password);
}

export const logIn = async (username: string, password: string) => {
    return await logInQuery(username, password);
}