import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto mt-6 px-6">

      <div
        className="h-[500px] rounded-3xl bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="bg-black/50 h-full w-full rounded-3xl flex items-center">

          <div className="ml-12 text-white max-w-xl">

            <h1 className="text-6xl font-bold leading-tight">
              Summer Collection 2026
            </h1>

            <p className="mt-6 text-xl">
              Discover amazing fashion, electronics and jewellery at the best prices.
            </p>

            <Link
              to="/products"
              className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl"
            >
              Shop Now
            </Link>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;