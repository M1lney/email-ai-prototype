"use client";

import React, { useActionState } from "react";
import { createBrand } from "@/lib/actions";

export default function BrandForm() {
    const initialState = { message: null, errors: {} };
    const [state, formAction] = useActionState(createBrand, initialState);

    return (
        <form action={formAction} className="space-y-6 p-6 bg-white shadow rounded">
            {/* Brand Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium">
                    Brand Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                />
            </div>

            {/* Website */}
            <div>
                <label htmlFor="website" className="block text-sm font-medium">
                    Website
                </label>
                <input
                    id="website"
                    name="website"
                    type="url"
                    className="w-full px-3 py-2 border rounded"
                />
            </div>

            {/* Description */}
            <div>
                <label htmlFor="description" className="block text-sm font-medium">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="w-full px-3 py-2 border rounded"
                />
            </div>

            {/* User ID */}
            <input type="hidden" name="userId" value="1" />
            <input type="hidden" name="identifier" value="BRAND" />

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
                Create Brand
            </button>

            {/* Success/Error Message */}
            {state.message && (
                <p className={`text-sm mt-4 ${state.errors ? "text-red-600" : "text-green-600"}`}>
                    {state.message}
                </p>
            )}
        </form>
    );
}

