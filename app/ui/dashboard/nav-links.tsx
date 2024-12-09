'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
    HomeIcon,
    AtSymbolIcon,
    BuildingStorefrontIcon
} from '@heroicons/react/24/outline';


const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon},
    { name: 'Brands', href: '/dashboard/brands', icon: BuildingStorefrontIcon},
    { name: 'Campaigns', href: '/dashboard/campaigns', icon: AtSymbolIcon},
];

export default function NavLinks() {
    const pathname = usePathname()

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center text-black justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
};