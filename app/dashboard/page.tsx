import CardDisplay from "@/app/ui/dashboard/card-display";
import {brandsList, campaignsList} from "@/lib/types";

interface DashboardPageProps {
    brands: brandsList;
    campaigns: campaignsList;
}

export default async function Page( props: DashboardPageProps ) {
    return (
        <div className="container mx-auto p-6">
            <div className="space-y-8">
                {/* Display Brands */}
                <section>
                    <CardDisplay title="Brands" typeIdentifier={"brands"} items={props.brands} />
                </section>

                {/* Display Campaigns */}
                <section>
                    <CardDisplay title="Campaigns" typeIdentifier={"campaigns"} items={props.campaigns} />
                </section>
            </div>
        </div>
    );
}
