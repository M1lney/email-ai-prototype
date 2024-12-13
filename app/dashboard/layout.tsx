import SideNav from "@/app/ui/dashboard/sidenav";

export default async function Layout({ children }: { children: React.ReactNode }) {


    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            {/* Side Navigation */}
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col md:overflow-y-auto">
                {/* Top Header Section */}
                <header className="p-4 bg-gray-100 border-b">
                </header>
                {/* Page Content */}
                <main className="p-6 md:p-12 flex-grow">
                    {children}
                </main>
            </div>
        </div>
    );
}
