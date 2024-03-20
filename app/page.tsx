import Container from "@/components/Container";
import Header from "@/components/base/Header";
import Slider from "@/components/base/Slider";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <Header />
      <Container className="bg-black/15">
        <Slider />
      </Container>
    </main>
  );
}
