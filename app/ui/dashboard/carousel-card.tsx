import Link from "next/link";
import {CarouselItemProps} from "@/app/ui/dashboard/carousel-item";



export default function CarouselCard(props: CarouselItemProps){
    const image = props.image ? <img src={props.image} alt={"brand image"}></img> : null;

    return (
        <div className="card card-compact card-bordered w-96 shadow-xl">
            <figure>
                {image}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/dashboard/brands/${props.id}`} passHref>
                        edit
                    </Link>
                </div>
            </div>
        </div>
    )
}