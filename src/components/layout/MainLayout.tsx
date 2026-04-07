import { Outlet } from "react-router-dom";

export default function MainLayout() {
	return (
		<div className="min-h-screen pt-16 pb-12">
			<Outlet />
		</div>
	);
}
