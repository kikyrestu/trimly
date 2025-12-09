import BottomNav from "../components/BottomNav";
import MobileLayout from "../components/MobileLayout";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MobileLayout className="bg-black text-white">
      {children}
      <BottomNav />
    </MobileLayout>
  );
}
