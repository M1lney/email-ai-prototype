import {getBrandsData, getCampaignData} from "@/lib/data";
import CardDisplay from "@/app/ui/dashboard/card-display";


export default async function Page() {
    // Fetching brands from the database
    const brands = await getBrandsData();
    const campaigns = await getCampaignData();

    return (
        <div className="container mx-auto p-6">
            <div className="space-y-8">
                {/* Display Brands */}
                <section>
                    <CardDisplay title="Brands" items={brands}/>
                </section>

                {/* Display Campaigns */}
                <section>
                    <CardDisplay title="Campaigns" items={campaigns}/>
                </section>
            </div>
        </div>
    );
}
