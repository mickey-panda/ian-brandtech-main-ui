
import ContactUsComponent from "@/components/ContactUsComponent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <ContactUsComponent/>
      <Footer/>
    </div>
  );
}