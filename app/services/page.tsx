import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceComponent from "@/components/ServiceComponent";


export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <ServiceComponent/>
      <Footer/>
    </div>
  );
}