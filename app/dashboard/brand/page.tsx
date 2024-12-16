import CardDisplay from "@/app/ui/dashboard/card-display";
import {brandsList} from "@/lib/types";
import Link from "next/link";
import clsx from "clsx";
import {LinkIcon} from "@heroicons/react/16/solid";

interface DashboardPageProps {
    brands: brandsList;
}

export default async function Page( props: DashboardPageProps ) {
    return (
        <div className="container mx-auto p-6">
            <div className="space-y-8">
                {/* Display Brands */}
                <section>
                    <CardDisplay title="Brands" typeIdentifier={"brands"} items={props.brands} />
                </section>

                <Link
                    href={'/dashboard/brand/create/'}
                >
                    <LinkIcon className="w-6" />
                    <p className="hidden md:block">Create New</p>
                </Link>
            </div>
        </div>
    );
}