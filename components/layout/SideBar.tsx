// Responsive SideBar, collapsed on mobile
import { motion } from "framer-motion";
import { useState } from "react";
import { SidebarItem } from "./sidebar/SideBarRenderer";
import SideBarRenderer from "./sidebar/SideBarRenderer";
export default function SideBar({ children, data }: { children: React.ReactNode, data: SidebarItem[] }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="flex h-full">
            <motion.div className="w-16 h-full bg-background-1" animate={{ width: isCollapsed ? "0" : "16rem" }}>
                <div className="">
                    <div className="p-3">
                        <SideBarRenderer data={data} />
                    </div>
                </div>
                <p onClick={toggleCollapse}>buh</p>
            </motion.div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}