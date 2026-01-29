import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WorkComponent from "@/components/WorkComponent";


export default function Work() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <WorkComponent/>
      <Footer/>
    </div>
  );
}