import MobileLayout from "../components/MobileLayout";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MobileLayout className="bg-black">
      {children}
    </MobileLayout>
  );
}
