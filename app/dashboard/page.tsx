import prisma from "@/lib/db";
import BrandCard from "@/app/ui/brands/brand-card";


export default async function Page() {
    // Fetching brands from the database
    const brands = await prisma.brand.findMany();

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
            {brands.map((brand) => (
                <BrandCard
                    key={brand.id} // Use unique identifier for the `key`
                    website={brand.website}
                    name={brand.name}
                    onEdit={() => handleEditBrand(brand.id)} // Define a function for editing
                />
            ))}
        </div>
    );
}

// Example edit handler (modify as per your logic)
function handleEditBrand(brandId: Number) {
    console.log(`Editing brand with ID: ${brandId}`);
    // Add navigation or modal logic here
}
