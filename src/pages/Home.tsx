import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Home() {
	const { user, isLoading } = useAuth();

	if (user && !isLoading) {
		return <Navigate to="/profile" replace />;
	}

	return <div className="text-4xl">Home</div>;
}
