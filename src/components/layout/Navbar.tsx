import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import useAuth from "../../hooks/useAuth";
import { UserButton } from "@neondatabase/neon-js/auth/react";

export default function Navbar() {
	const { user } = useAuth();

	return (
		<header className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
			<div className="max-w-6xl mx-auto px-6 h-16 text-foreground flex items-center justify-between">
				<Link
					to="/"
					className="flex gap-2 items-center text-lg font-semibold hover:text-accent transition-colors"
				>
					<Dumbbell className="w-6 h-6 text-accent" />
					<span>GYMify</span>
				</Link>

				<nav>
					{user ? (
						<div className="space-x-4">
							<Link
								to="/profile"
								className="hover:text-accent transition-colors text-sm text-muted"
							>
								My Plan
							</Link>
							<UserButton className="bg-accent hover:bg-accent-hover cursor-pointer" />
						</div>
					) : (
						<div className="space-x-2">
							<Link to="/auth/sign-in">
								<Button variant="ghost" size="sm">
									Sign In
								</Button>
							</Link>
							<Link to="/auth/sign-up">
								<Button size="sm">Sign Up</Button>
							</Link>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
}
