import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';


export default function JunctionLogo() {
    return (
        <div
            className={`${lusitana.className} flex flex-col items-center leading-none text-white`}
        >
            {/* Logo Image */}
            <Image
                src={'/logomark-blue.png'}
                alt={"Junction Media Logo"}
                width={100}
                height={100}
                className="mb-2" // Adds spacing between the image and text
            />
            {/* Text Below the Logo */}
            <p className="text-[12px] text-black">Junction Media</p>
        </div>
    );
}