interface CampaignCardProps {
    id: number;
    name: string;
    description: string;
    brandName: string;
    identifier: string;
}


export default function CampaignCard({name, description, brandName}: CampaignCardProps) {
    return (
        <div className="card border rounded shadow-lg p-4 w-64">
            <h3 className="text-lg font-bold mt-2">{name}</h3>
            <p className="text-sm text-gray-600 mt-1">{brandName}</p>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}