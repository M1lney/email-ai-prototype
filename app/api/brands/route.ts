import prisma from "@/lib/db";
import {z} from "zod";


export async function POST(request: Request) {

    try {
        const formData = await request.json();

        const brand = await prisma.brand.create(formData);
        return Response.json({ brand }, { status: 201 } );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ errors: error.flatten().fieldErrors }, { status: 400 });
        }

        return Response.json({ message: 'An unexpected error occurred' }, { status: 500 });
    }

}