import React, { createContext, useState, useContext, ReactNode } from "react";

interface BrandContextType {
    selectedBrandId: string | null;
    setSelectedBrandId: (brandId: string | null) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function useBrandContext() {
    const context = useContext(BrandContext);
    if (!context) {
        throw new Error("useBrandContext must be used within a BrandProvider");
    }
    return context;
}

interface BrandProviderProps {
    children: ReactNode;
}

export function BrandProvider({ children }: BrandProviderProps) {
    const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);

    return (
        <BrandContext.Provider value={{ selectedBrandId, setSelectedBrandId }}>
            {children}
        </BrandContext.Provider>
    );
}

