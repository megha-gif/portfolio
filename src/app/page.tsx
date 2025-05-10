import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Howiworksection from "@/components/Howiworksection";
import Myworksection from "@/components/Myworksection";
import Contactsection from "@/components/Contactsection";
import Footersection from "@/components/Footersection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Howiworksection />
      <Myworksection />
      <Contactsection />
      <Footersection />
    </>
  );
}
