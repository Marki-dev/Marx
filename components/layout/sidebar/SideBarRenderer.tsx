import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export type SideBarRendererProps = {
    data: SidebarItem[];
};

export type SidebarItem = {
    name: string;
    icon: React.ReactNode;
    onClick?: string | (() => void);
    children?: SidebarItem[];
};

export default function SideBarRenderer({ data }: SideBarRendererProps) {
    return (
        <div className="flex flex-col gap-2">
            {data.map((item) => (
                <SidebarItemComponent key={item.name} item={item} />
            ))}
        </div>
    );
}

function SidebarItemComponent({ item }: { item: SidebarItem }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        if (typeof item.onClick === "function") {
            item.onClick();
        } else if (typeof item.onClick === "string") {
            router.push(item.onClick); // Handle string URL navigation
        }
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="flex flex-col">
            <div
                className="relative flex items-center gap-2 text-xl font-semibold p-3 hover:bg-primary-0 rounded-md cursor-pointer"
                onClick={handleClick}
            >
                {item.icon}
                {item.name}
            </div>
            {item.children && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden flex flex-col pl-4 border-l border-l-secondary-0/50 border-primary-300"
                >
                    <SideBarRenderer data={item.children} />
                </motion.div>
            )}
        </div>
    );
}
