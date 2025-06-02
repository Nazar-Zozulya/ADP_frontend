import { useEffect, useState } from "react";
import { User } from "../types";
import { Result } from "../../../shared/types";
import { useUserContext } from "../context";
import { GET, POST } from "../../../shared/api";


export function useAuth(){
    const { user, setUser, token, setToken } = useUserContext()
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);


    // getMe

    async function getMe(token: string): Promise<Result<User>> {
        setIsLoading(true);
        setError(null);

        try {
            const result = await GET<User>({
                endpoint: 'api/users/user',
                token: token
            });

            if (result.status === 'error') {
                if (result.message === undefined) return result
                setError(result.message)
                return result
            }
            // if(result)

            setUser(result.data);
            return result
        } catch (error) {
            setError(`${error}`);
            return {
                status: 'error',
                message: `${error}`,
                code: 500
            };
        } finally {
            setIsLoading(false);
        }
    }


    // login

    async function login(email: string, password: string): Promise<Result<string>> {
        setIsLoading(true);
        setError(null);

        try {
            const result = await POST<string>({
                endpoint: 'api/users/login',
                body: { email, password }
            });

            if (result.status === 'error') {
                if (result.message === undefined) return result
                setError(result.message)
                return result;
            }

            setToken(result.data)
            await getMe(result.data);
            return result;
        } catch (error) {
            setError(`${error}`);
            return {
                status: 'error',
                message: `${error}`,
                code: 500
            };
        } finally {
            setIsLoading(false);
        }
    }


    // register

    async function register(
        name: string,
        surname: string,
        email: string,
        password: string,
        // image: File,
    ): Promise<Result<string>> {
        setIsLoading(true);
        setError(null);

        try {
            const result = await POST<string>({
                endpoint: 'api/users/register',
                body: { email, name, surname, password }
            });

            if (result.status === 'error') {
                if (result.message === undefined) return result
                setError(result.message)
                return result;
            }

            setToken(result.data)
            await getMe(result.data);
            return result;
        } catch (error) {
            setError(`${error}`);
            return {
                status: 'error',
                message: `${error}`,
                code: 500
            };
        } finally {
            setIsLoading(false);
        }
    }


    // useEffect

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getMe(token);
        }
    }, []);
    
    // useEffect(()=> {
    //     const newToken = localStorage.setItem('token', token);
    // }, [token])

    return { getMe, login, register }
}