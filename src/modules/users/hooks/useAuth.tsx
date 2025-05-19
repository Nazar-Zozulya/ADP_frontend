import { useState } from "react";
import { User } from "../types";
import { Result } from "../../../shared/types";
import { useUserContext } from "../context";


export function useAuth(){
    // const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    async function login(email: string, password: string) {
        try {
            setIsLoading(true);
            const response = await fetch("http://127.0.0.1:8000/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            const result: Result<string> = await response.json();

            if (result.status === "error") {
                setError(result.message);
            } else {
                return result.data
            }

        } catch (error) {
            const err = error instanceof Error ? error.message : undefined;
            setError(`${err}`);
        } finally {
            setIsLoading(false);
        }
    }
    async function register(name: string, surname: string, email: string, password: string) {
         try {
            setIsLoading(true);
            const response = await fetch("http://127.0.0.1:8000/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({name, surname, email, password})
            });

            const result: Result<string> = await response.json();

            if (result.status === "error") {
                setError(result.message);
            } else {
                return result.data
            }

        } catch (error) {
            const err = error instanceof Error ? error.message : undefined;
            setError(`${err}`);
        } finally {
            setIsLoading(false);
        }
    }

    async function getMe(token: string) {
         try {
            setIsLoading(true);
            const response = await fetch("http://127.0.0.1:8000/users/me", {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json',
                    'Authorization': `Token ${token}`,
                },
            });

            const result = await response.json();

            if (result.status === "error") {
                setError(result.message);
            } else {
                return result.data
            }

        } catch (error) {
            const err = error instanceof Error ? error.message : undefined;
            setError(`${err}`);
        } finally {
            setIsLoading(false);
        }
    }

    return {isLoading, error, login, register, getMe}
}