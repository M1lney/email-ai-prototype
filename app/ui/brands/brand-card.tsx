import Link from 'next/link';

interface BrandCardProps {
    website: string;
    name: string;
    id: number;
}

export default function BrandCard({ website, name, id }: BrandCardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-600">
                    <strong>Website:</strong>{' '}
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        {website}
                    </a>
                </p>
                <div className="mt-4">
                    <Link href={`/app/brand/dashboard/brands/${id}`} passHref>
                        edit
                    </Link>

                </div>
            </div>
        </div>
    );
}


