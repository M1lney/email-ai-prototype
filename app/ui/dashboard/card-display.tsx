import {brandsList, campaignsList} from "@/lib/types";
import {getBrandsOrCampaigns} from "@/lib/data";
import Card from "@/app/ui/dashboard/card";



interface CardContainerProps {
    title: string;
    items: campaignsList | brandsList;
    typeIdentifier: "brands" | "campaigns";
}

export default async function CardDisplay({title, items, typeIdentifier} : CardContainerProps) {
    items = await getBrandsOrCampaigns(typeIdentifier);
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map( (item) => (
                    <Card {...item} />
                ))}
            </div>
        </div>
    );
}








