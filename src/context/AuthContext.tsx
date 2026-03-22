import { createContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "../types";
import { authClient } from "../lib/auth";

interface AuthContextType {
	user: User | null;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [neonUser, setNeonUser] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		async function loadUser() {
			try {
				const result = await authClient.getSession();
				if (result && result.data?.user) setNeonUser(result.data.user);
				else setNeonUser(null);
			} catch (error) {
				console.error(error);
				setNeonUser(null);
			} finally {
				setIsLoading(false);
			}
		}

		loadUser();
	}, []);

	return (
		<AuthContext.Provider value={{ user: neonUser, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext };
