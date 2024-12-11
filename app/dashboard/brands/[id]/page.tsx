import prisma from "@/lib/db";

export default async function BrandPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const brand = await prisma.brand.findUnique({
        where: { id: parseInt(id, 10) },
    });

    if (!brand) {
        return <div>Brand not found</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{brand.name}</h1>
            <p>
                <strong>Website:</strong>{" "}
                <a href={brand.website} target="_blank" className="text-blue-700 underline">
                    {brand.website}
                </a>
            </p>
        </div>
    );
}

