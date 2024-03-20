import Container from "@/components/Container";
import Header from "@/components/base/Header";
import Products from "@/components/base/Products";
import Slider from "@/components/base/Slider";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full bg-[#E3E6E6]">
      <Header />
      <Container className="relative">
        <Slider />
        <Products />
      </Container>
    </main>
  );
}
