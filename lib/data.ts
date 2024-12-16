import prisma from "@/lib/db";


export async function getBrands() {
    const brands = await prisma.brand.findMany({
        include: { campaigns: true },
    });
    return brands.map((brand) => ({
        ...brand,
        _typename: "Brand" as const,
    }));
}

export async function getCampaigns() {
    const campaigns = await prisma.campaign.findMany({
        include: { brand: true },
    });
    return campaigns.map((campaign) => ({
        ...campaign,
        _typename: "Campaign" as const,
    }));
}

export async function getBrandsOrCampaigns( identifier: "campaigns" | "brands" ) {
    switch (identifier) {
        case "brands":
            return getBrands();
        case "campaigns":
            return getCampaigns();
    }
}


