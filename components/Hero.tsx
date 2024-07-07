import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center text-center">
      <div className="px-4 md:px-6 max-w-[1500px] mx-auto w-[90%]">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-dark">
            Ready To Give The Test?
          </h1>
          <p className="text-gray-600">Let's Go !!</p>
        </div>
        <div className="mt-6">
            <Link href={"/quiz"}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-gray-50 transition-colors bg-primary hover:bg-primary/90">
                I am Ready
            </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
