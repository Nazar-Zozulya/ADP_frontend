import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { User } from "../types";
import { useAuth } from "../hooks/useAuth";
import { get } from "http";

interface IUserContext {
	user: User | null;
	token: string | null;
	setUser: (value: User) => void;
	setToken: (value: string) => void;
	login: (email: string, password: string) => void;
	register: (
		name: string,
		surname: string,
		email: string,
		password: string
	) => void;
	isAuthenticated: () => boolean;
	// getUser: (token:string) => void
}

const initialValue: IUserContext = {
	user: null,
	token: null,
	setUser: () => {},
	setToken: () => {},
	login: (email: string, password: string) => {},
	register: (
		name: string,
		surname: string,
		email: string,
		password: string
	) => {},
	isAuthenticated: () => false,
	// getUser: (token:string) => {},
};

const userContext = createContext<IUserContext>(initialValue);

export function useUserContext() {
	return useContext(userContext);
}

export function UserContextProvider({children}: {children: ReactNode}) {
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
    const { login: hookLogin, register: hookRegister, getMe: hookGetMe } = useAuth()

	function isAuthenticated() {
		if (user === null) {
			return false;
		}
		return true;
	}

	async function login(email: string, password: string){
        const loginResponse = await hookLogin(email, password)

        if (!loginResponse) return

        setToken(loginResponse)

        const getMeResponse = await getMe(loginResponse)

    }

    async function register(name:string, surname:string, email: string, password: string){
        const registerResponse = await hookRegister(name, surname, email, password)

        if (!registerResponse) return

        setToken(registerResponse)

        const getMeResponse = await getMe(registerResponse)

    }


	async function getMe(token: string){
		const getMe = await hookGetMe(token)

		if (getMe.status === 'error') return

		// console.log(getMe)

		return setUser(getMe)
	}

	useEffect(() => {
		if (token === null) return;
		localStorage.setItem("token", token);

		getMe(token)
	}, [token]);

	useEffect(()=>{
		console.log(user)
	}, [user])

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token === null) return;
		setToken(token);
	}, []);

	return (
		<userContext.Provider
			value={{
				user: user,
				token: token,
				setUser: setUser,
				setToken: setToken,
                login: login,
                register: register,
				isAuthenticated: isAuthenticated,
			}}
		>
			{children}
		</userContext.Provider>
	);
}
