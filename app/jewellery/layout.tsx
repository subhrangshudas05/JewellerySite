import JewelleryFooter from "@/jewelleryComponenets/JewelleryFooter";
import JewelleryNavbar from "@/jewelleryComponenets/JewelleryNavbar";

export default function JewelleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col  bg-amber-100/70">
      <JewelleryNavbar />
      <main className="flex-1">{children}</main>
      
      <JewelleryFooter/>
    </div>
  )
}