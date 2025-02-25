import { FaDiscord, FaHome, FaKey, FaLock, FaQuestion, FaSpotify, FaUser } from "react-icons/fa";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { SidebarItem } from "./sidebar/SideBarRenderer";

const sidebars: SidebarItem[] = [
    {
        name: "Discord",
        icon: <FaDiscord />,
        children: [
            {
                name: "Users",
                icon: <FaUser />,
                children: [
                    {
                        name: "Avatar",
                        icon: <FaUser />,
                        onClick: "buh",
                    },
                    {
                        name: "Info",
                        icon: <FaQuestion />,
                        onClick: "buh",
                    }
                ]
            },
            {
                name: "Bots",
                icon: <FaUser />,
                children: [
                    {
                        name: "Avatar",
                        icon: <FaUser />,
                        onClick: "buh",
                    },
                    {
                        name: "Info",
                        icon: <FaQuestion />,
                        onClick: "buh",
                    }
                ]
            }
        ]
    },
    {
        name: "Spotify",
        icon: <FaLock />,
        children: [
            {
                name: "oAuth",
                icon: <FaUser />,
                children: [
                    {
                        name: "Generate Tokens",
                        icon: <FaKey />,
                        onClick: "buh",
                    }
                ]
            },
            {
                name: "Bots",
                icon: <FaUser />,
                children: [
                    {
                        name: "Avatar",
                        icon: <FaUser />,
                        onClick: "buh",
                    },
                    {
                        name: "Info",
                        icon: <FaQuestion />,
                        onClick: "buh",
                    }
                ]
            }
        ]
    }
]

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen relative">
            <NavBar />
            <SideBar data={sidebars}>
                {children}
            </SideBar>
        </div>
    )
}