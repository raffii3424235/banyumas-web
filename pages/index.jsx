import Card from "@/components/client/card";
import Layout from "@/components/client/layout";
import useOffsetY from "@/hooks/useOffsetY";
import { Link } from "react-scroll";

export default function Home() {
  const offsetY = useOffsetY();

  return (
    <>
      <Layout>
        <div className="w-screen h-screen bg-hero px-8 bg-no-repeat flex justify-center items-center bg-fixed text-center bg-center bg-cover">
          <div className="space-y-3">
            <h1 className="text-3xl">Jelajah Lebih Luas Kuliner Banyumas</h1>
            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              non eum provident suscipit est facilis consequatur architecto.
            </p>
            <span className="bg-gradient-to-b from-orange_dark to-orange_light py-3 text-sm font-medium tracking-wider cursor-pointer">
              <Link className="py-3 px-9" to="kuliner" smooth={true}>
                Go Explore
              </Link>
            </span>
          </div>
        </div>
        {/* HERO */}
        <div className="text-black px-8">
          <div id="kuliner" className="flex justify-center py-8">
            <div>
              <div className="text-center pb-10">
                <h1 className="text-2xl font-black">Kuliner Khas Banyumas</h1>
                <p>Berbagai kuliner khas dari Banyumas</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-6">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </div>
                </div>
                <a
                  href="/"
                  className="font-semibold text-sm bg-gradient-to-b from-orange_dark to-orange_light text-white px-6 py-2"
                >
                  Lebih Banyak
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
