import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewSidebar from "@/components/NewSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#dfdfdf]">
      <main className="flex justify-center items-center">
        <NewSidebar />
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
