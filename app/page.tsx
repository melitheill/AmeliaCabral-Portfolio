import { Hero } from "@/components/ui/Hero";
import { Services } from "@/components/ui/Services";
import { Testimonials } from "@/components/ui/Testimonials";
import { About } from "@/components/ui/About";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
    return (
        <div className="w-full flex flex-col font-sans text-text-body">
            <Navbar />
            <main className="flex-grow">
                {/* NO ANIMATION: Hero section (LCP optimization) */}
                <Hero />

                {/* ANIMATED SECTIONS: Intermediate content */}

                <Services />
                <Testimonials />
                <About />

                {/* NO ANIMATION: Contact section (User request) */}
                <Contact />
            </main>

            {/* NO ANIMATION: Footer */}
            <Footer />
        </div>
    );
}
