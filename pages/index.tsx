import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import SideBar from "@/components/layout/SideBar";
import PageLayout from "@/components/layout/PageLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <PageLayout>
      <div>buh</div>
    </PageLayout>
  );
}
