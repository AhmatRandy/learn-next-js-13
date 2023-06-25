"use client";

import { Card, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import { CardCarProps } from "@/types";
import { useEffect, useState } from "react";
import { fuels, yearsOfProduction } from "@/constants";

export default function Home() {
  const [allCars, setAllCars] = useState<any>([]);
  const [loading, setIsloading] = useState<boolean>(false);

  const [manufacturer, setManufacturer] = useState<string>("");
  const [year, setYear] = useState<number>(2022);
  const [fuel, setFuel] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [model, setModel] = useState<string>("");
  // console.log(allCars);
  console.log(manufacturer);

  const getData = async () => {
    try {
      setIsloading(true);
      const data = await fetchCars({
        manufacturer,
        year,
        fuel,
        limit,
        model,
      });

      setAllCars(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [year, model, fuel, limit, manufacturer]);

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
          {/* Search component */}
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          {/* filter component */}
          <div className="home__filter-container">
            <CustomFilter setFilter={setFuel} title="fuel" options={fuels} />
            <CustomFilter
              title="year"
              setFilter={setYear}
              options={yearsOfProduction}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            {allCars?.map((cars: CardCarProps) => (
              <Card car={cars} key={cars.city_mpg} />
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
