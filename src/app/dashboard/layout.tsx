import { NavItems } from "@/components/pages/dashboard/nav-items";
import { UserDropdown } from "@/components/pages/dashboard/user-dropdown";
import { ThemeToggle } from "@/components/shared/theme-toggle";

type DashboardLayoutProps = {
	children: React.ReactNode;
};

export default function DashboardLayout({
	children,
}: Readonly<DashboardLayoutProps>) {
  // TODO: criar uma logo em svg usando o próprio SVG como componente
	return (
		<div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]">
			<aside className="w-full h-full flex flex-col items-center border-r border-muted">
        <div className="w-full p-6 border-b border-muted">
          <h1 className="text-2xl font-bold">ResuMake✏️</h1>
        </div>

        <NavItems />

        <div className="w-full mt-auto border-t border-muted px-3 py-4 flex items-center justify-between gap-2">
          <UserDropdown />
          <ThemeToggle />
        </div>
      </aside>

      <main className="p-6 flex flex-col w-full h-full overflow-auto">
        {children}
      </main>
		</div>
	);
}