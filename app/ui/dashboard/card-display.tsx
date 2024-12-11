import Card from "@/app/ui/dashboard/card";

interface CardContainerProps {
    title: string;
    items: Array<{ id: number; name: string; description: string; image?: string; brandName?: string }>;
}

export default function CardDisplay({title, items}: CardContainerProps) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        brandName={item.brandName}
                    />
                ))}
            </div>
        </div>
    )
}