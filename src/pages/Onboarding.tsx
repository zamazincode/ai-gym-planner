import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import useAuth from "../hooks/useAuth";

export default function Onboarding() {
	const { user } = useAuth();

	if (!user) {
		return <RedirectToSignIn />;
	}

	return (
		<SignedIn>
			<div className="max-w-xl mx-auto">
				{/* Step 1 : Questionnaire */}
				{/* Step 2 : Generating */}
			</div>
		</SignedIn>
	);
}
