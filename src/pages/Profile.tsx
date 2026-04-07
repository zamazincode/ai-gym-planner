import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Profile() {
	const { user, isLoading, plan } = useAuth();

	if (!user && !isLoading) {
		return <Navigate to="/auth/sign-in" replace />;
	}

	if (!plan) {
		return <Navigate to="/onboarding" replace />;
	}

	return <div>Profile</div>;
}
