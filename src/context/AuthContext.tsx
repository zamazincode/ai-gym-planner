import { createContext, useEffect, useState, type ReactNode } from "react";
import type { User, UserProfile } from "../types";
import { authClient } from "../lib/auth";
import { api } from "../lib/api";

interface AuthContextType {
	user: User | null;
	// plan: TrainingPlan | null;
	isLoading: boolean;
	saveProfile: (
		profile: Omit<UserProfile, "userId" | "updatedAt">,
	) => Promise<void>;
	// generatePlan: () => Promise<void>;
	// refreshData: () => Promise<void>;
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

	async function saveProfile(
		profileData: Omit<UserProfile, "userId" | "updatedAt">,
	) {
		if (!neonUser) {
			throw new Error("User must be authenticated to save profile");
		}

		await api.saveProfile(neonUser.id, profileData);
		// await refreshData();
	}

	return (
		<AuthContext.Provider
			value={{ user: neonUser, isLoading, saveProfile }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext };
