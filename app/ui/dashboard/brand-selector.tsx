"use client";

import { usePathname, useRouter } from "next/navigation";

interface BrandSelectorProps {
    brands: { id: number; name: string }[];
}

export default function BrandSelector({ brands }: BrandSelectorProps) {
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBrandId = event.target.value;
        const params = new URLSearchParams(window.location.search);
        params.set("brandId", selectedBrandId);
        router.push(`/brand?${params.toString()}`);
    };

    return (
        <select onChange={handleChange} className="p-2 border rounded">
            <option value="all">All Brands</option> {/* Represents "all brands" */}
            {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                    {brand.name}
                </option>
            ))}
        </select>
    );
}





