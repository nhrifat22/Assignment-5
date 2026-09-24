import heroImg from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 py-12 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Build Your Ideal <br />
          <span className="text-brand">Development Stack</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-xl">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#technologies" className="bg-brand text-white font-medium rounded-lg px-5 py-3">Explore Technologies</a>
          <a href="#about" className="border border-gray-300 rounded-lg px-6 py-3">Learn More</a>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={heroImg} alt="Layered development stack illustration" className="w-full max-w-md" />
      </div>
    </section>
  );
}

export default Hero;