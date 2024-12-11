'use client';

import { useState } from "react";
import {useBrandContext} from "@/app/contexts/brand-context";

interface BrandSelectorProps {
    brands: { id: number; name: string }[];
}

export default function BrandSelector({ brands }: BrandSelectorProps) {
    const { setSelectedBrandId } = useBrandContext(); // Use the context to get setSelectedBrandId
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value || null;
        setSelectedBrand(selectedId);
        setSelectedBrandId(selectedId);
    };

    return (
        <div>
            <label htmlFor="brand">Select a Brand</label>
            <select
                id="brand"
                value={selectedBrand || ""}
                onChange={handleChange}
            >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                        {brand.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

