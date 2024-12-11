import prisma from "@/lib/db";


export async function getCampaignData() {
    try {
        const campaigns = await prisma.campaign.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                brand: {
                    select: {
                        name: true,
                    }
                }
            },
        });
        return campaigns;
    } catch (error) {
        console.error("Error fetching campaigns:", error);
        throw new Error("Failed to fetch campaigns.");
    }
}

export async function getBrandsData() {
    try {
        const brands = await prisma.brand.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                website: true,
            },
        });
        return brands;
    } catch (error) {
        console.error("Error fetching brands:", error);
        throw new Error("Failed to fetch brands.");
    }
}

export async function getBrandIdsAndNames() {
    try {
        const brands = await prisma.brand.findMany({
            select: {
                id: true,
                name: true,
            },
        });
        return brands;
    } catch (error) {
        console.error("Error fetching brands:", error);
        throw new Error("Failed to fetch brands.");
    }
}

export async function getCampaignsById(brandId: number) {
    try {
        const campaigns = await prisma.campaign.findMany({
            where: {
                brandId: brandId,
            },
            select: {
                id: true,
                name: true,
                description: true,
                brand: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        return campaigns;
    } catch (error) {
        console.error("Error fetching campaigns:", error);
        throw new Error("Failed to fetch campaigns.");
    }
}
