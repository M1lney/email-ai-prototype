import prisma from "@/lib/db";

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        const brand = await prisma.brand.create({
            data: {
                name: formData.name,
                website: formData.website,
                description: formData.description,
                userId: Number(formData.userId),
                identifier: formData.identifier,
                ...(formData.colors ? { colors: formData.colors } : {}),
            },
        });

        return Response.json({ message: "Brand created successfully!", brand }, { status: 201 });
    } catch (error) {
        console.error("Error creating brand:", error);

        return Response.json(
            { message: "Failed to create brand. Please try again later." },
            { status: 500 }
        );
    }
}
