'use client';

import React, {useActionState} from 'react';
import { createBrand, State } from "@/lib/actions";

type FormProps = {};

export default function BrandForm({}: FormProps) {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(createBrand, initialState);

    return (
        <form action={formAction} className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="space-y-6">
                {/* Brand Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Brand Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        aria-describedby="name-error"
                    />
                    {state.errors?.name && (
                        <div id="name-error" className="text-sm text-red-600 mt-1">
                            {state.errors.name.map((error) => (
                                <p key={error} className="text-red-600">{error}</p>
                            ))}
                        </div>
                    )}
                </div>

                {/* Website */}
                <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                        Website
                    </label>
                    <input
                        id="website"
                        name="website"
                        type="url"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        aria-describedby="website-error"
                    />
                    {state.errors?.website && (
                        <div id="website-error" className="text-sm text-red-600 mt-1">
                            {state.errors.website.map((error) => (
                                <p key={error} className="text-red-600">{error}</p>
                            ))}
                        </div>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        aria-describedby="description-error"
                    />
                    {state.errors?.description && (
                        <div id="description-error" className="text-sm text-red-600 mt-1">
                            {state.errors.description.map((error) => (
                                <p key={error} className="text-red-600">{error}</p>
                            ))}
                        </div>
                    )}
                </div>

                {/* User ID */}
                <div>
                    <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                        User ID
                    </label>
                    <input
                        id="userId"
                        name="userId"
                        type="number"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        aria-describedby="userId-error"
                    />
                    {state.errors?.userId && (
                        <div id="userId-error" className="text-sm text-red-600 mt-1">
                            {state.errors.userId.map((error) => (
                                <p key={error} className="text-red-600">{error}</p>
                            ))}
                        </div>
                    )}
                </div>

                {/* Identifier (hidden input) */}
                <input type="hidden" name="identifier" value="BRAND" />

                {/* Submit Button */}
                <div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                        Create Brand
                    </button>
                </div>

                {/* Success/Error Message */}
                {state.message && (
                    <p className="text-sm mt-4 text-green-600">
                        {state.message}
                    </p>
                )}
            </div>
        </form>
    );
}
