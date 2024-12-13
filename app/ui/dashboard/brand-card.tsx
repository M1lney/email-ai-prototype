interface BrandCardProps {
    id: number;
    name: string;
    description: string;
    identifier: string;
    website: string;
}


export default function BrandCard({name, description}: BrandCardProps) {
    return (
        <div className="card border rounded shadow-lg p-4 w-64">
            <h3 className="text-lg font-bold mt-2">{name}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}