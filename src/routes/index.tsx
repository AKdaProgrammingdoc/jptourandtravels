import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Fleet from "@/components/site/Fleet";
import Tariff from "@/components/site/Tariff";
import Places from "@/components/site/Places";
import Corporate from "@/components/site/Corporate";
import LocalPackages from "@/components/site/LocalPackages";
import Reviews from "@/components/site/Reviews";
import Feedback from "@/components/site/Feedback";
import BookForm from "@/components/site/BookForm";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import { useScrollReveal } from "@/lib/reveal";
import { I18nProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JP Tours and Travels — Premium South India Cab & Tempo Hire from Madurai" },
      {
        name: "description",
        content:
          "JP Tours and Travels — premium chauffeur-driven cars, tempo travellers, Urbania & buses for hire in Madurai. Outstation trips across Tamil Nadu, Kerala & South India.",
      },
    ],
  }),
});

function IndexInner() {
  useScrollReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Fleet />
      <Tariff />
      <LocalPackages />
      <Places />
      <Corporate />
      <Reviews />
      <BookForm />
      <FAQ />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}

function Index() {
  return (
    <I18nProvider>
      <IndexInner />
    </I18nProvider>
  );
}
