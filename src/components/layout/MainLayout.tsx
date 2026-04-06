import { Outlet } from "react-router-dom";

export default function MainLayout() {
	return (
		<div className="min-h-screen pt-18 px-4 md:px-6 pb-12">
			<Outlet />
		</div>
	);
}
