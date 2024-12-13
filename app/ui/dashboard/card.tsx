interface CardProps {
    id: number;
    name: string;
    description: string;
    image?: string;
    brandName?: string;
    identifier: string;
}


export default function Card({name, description, image, brandName}: CardProps) {
    return (
        <div className="card border rounded shadow-lg p-4 w-64">
            {image && <img src={image} alt={name} className="w-full h-32 object-cover rounded"/>}
            <h3 className="text-lg font-bold mt-2">{name}</h3>
            {brandName && <p className="text-sm text-gray-600 mt-1">{brandName}</p>}
            <p className="text-gray-600">{description}</p>
        </div>
    )
}
