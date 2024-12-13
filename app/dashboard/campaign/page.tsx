import CardDisplay from "@/app/ui/dashboard/card-display";
import {campaignsList} from "@/lib/types";

interface DashboardPageProps {
    campaigns: campaignsList;
}

export default async function Page( props: DashboardPageProps ) {
    return (
        <div className="container mx-auto p-6">
            <div className="space-y-8">
                {/* Display Brands */}
                <section>
                    <CardDisplay title="Brands" typeIdentifier={"campaigns"} items={props.campaigns} />
                </section>

            </div>
        </div>
    );
}