

export async function createBrand(prevState: any, formData: FormData) {
    try {
        const response = await fetch("/api/brands/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: formData.get("name"),
                website: formData.get("website"),
                description: formData.get("description"),
                userId: Number(formData.get("userId")), // Convert userId
                identifier: formData.get("identifier"),
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            return { message: result.message || "Failed to create brand.", errors: {} };
        }

        return { message: result.message, errors: {} };
    } catch (error) {
        console.error("Error in createBrand action:", error);

        return { message: "An unexpected error occurred. Please try again later.", errors: {} };
    }
}
