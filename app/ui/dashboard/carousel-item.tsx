import CarouselCard from "@/app/ui/dashboard/carousel-card";

export interface CarouselItemProps {
    name: string;
    image?: string;
    website: string;
    description: string;
    id: number;
}

export default function CarouselItem({name, id, image, description, website}: CarouselItemProps) {
    return (
        <div className="carousel-item">
            <CarouselCard id={id} website={website} name={name} description={description} image={image ? image : undefined}/>
        </div>
    )
}


