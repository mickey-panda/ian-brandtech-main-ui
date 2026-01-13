import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}
