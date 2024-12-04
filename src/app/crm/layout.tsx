import { AppSidebar } from "@/components/AppSidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#dfdfdf]">
      <SidebarProvider>
      <AppSidebar />
      <main>
        <Header/>
        <SidebarTrigger className="absolute z-1"/>
        {children}
        <Footer/>
      </main>
    </SidebarProvider>
    </div>
  );
}
