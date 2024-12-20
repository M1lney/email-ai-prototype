import NavLinks from "@/app/ui/dashboard/nav-links";
import Link from "next/link";
import JunctionLogo from "@/app/ui/junction-logo";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            {/* Link with centered logo */}
            <Link
                className="mb-2 flex h-20 items-center justify-center rounded-md bg-white p-4 md:h-40"
                href="/"
            >
                <div className="w-32 md:w-40 flex items-center justify-center">
                    <JunctionLogo />
                </div>
            </Link>

            {/* Other navigation elements */}
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <button
                        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
};

