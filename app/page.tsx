import { Card, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import { CardCarProps } from "@/types";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);
  const isEmptyCars = !allCars || allCars.length < 1;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl">Car Catalog </h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="year" />
            <CustomFilter title="fue" />
          </div>
        </div>
        {!isEmptyCars ? (
          <section>
            {allCars?.map((cars: CardCarProps) => (
              <Card car={cars} />
            ))}
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no result</h2>
            <p>{allCars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
