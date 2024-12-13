import { Prisma } from "@prisma/client";
import {getBrands, getCampaigns} from "@/lib/data";


export type brandsList = Prisma.PromiseReturnType<typeof getBrands>;
export type campaignsList = Prisma.PromiseReturnType<typeof getCampaigns>;







