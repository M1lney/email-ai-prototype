'use server'

import {z} from "zod";




const createBrandFormSchema = z.object({
    name: z.string().min(1, 'Brand name must not be empty'),
    website: z.string().url('Please provide a valid URL'),
    description: z.string().min(10, 'Description must be at least 10 characters long'),
    userId: z.number().int().positive('User ID must be a positive integer').min(1, 'User ID is required'),
    identifier: z.literal('BRAND'),
});

export type State = {
    errors?: {
        name?: string[];
        website?: string[];
        description?: string[];
        userId?: string[];
        identifier?: string[];
    };
    message?: string | null;
};


export async function createBrand(prevState: State, formData: FormData) : Promise<State> {
    const validatedFormData = createBrandFormSchema.safeParse({
        name: formData.get('name'),
        website: formData.get('website'),
        description: formData.get('description'),
        userId: formData.get('userId'),
        identifier: formData.get('identifier'),
    });

    if (!validatedFormData.success) {
        return {
            errors: validatedFormData.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Brand.',
        };
    }

    try {
        const response = await fetch("/api/brand", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(validatedFormData.data),
        });

        if (!response.ok) {
            const { message } = await response.json();
            return {
                errors: {},
                message: message || "Failed to create brand. Please try again.",
            };
        }

        return {
            errors: {},
            message: "Brand created successfully!",
        };
    } catch (error) {
        return {
            errors: {},
            message: "An unexpected error occurred. Please try again later.",
        };
    }

}