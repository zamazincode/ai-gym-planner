import { AuthView } from "@neondatabase/neon-js/auth/react";
import { Navigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Auth() {
	const { pathname } = useParams();

	const { user } = useAuth();

	if (user) return <Navigate to="/profile" />;

	return (
		<div className="flex items-center justify-center min-h-screen pt-18 px-4 md:px-6 pb-12">
			<div className="max-w-md w-full ">
				<AuthView pathname={pathname} />
			</div>
		</div>
	);
}
