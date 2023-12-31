import { CardCarProps } from "@/types";


interface propsapi {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string
}

export async function fetchCars(props: propsapi) {
  const {manufacturer, year, model, fuel, limit} = props
    const headers = {
		'X-RapidAPI-Key': '394aa919e7msh70f1fa551c6c942p1e1ae5jsn56ca649175c5',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit${limit}&fuel_type${fuel}`, {
        headers: headers
    })

    const result = await response.json()
    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export const generateCardImgUrl = (car: CardCarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage")
  const { make, year, model } = car
  
  url.searchParams.append('customer', "idordet")
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(" ")[0])
  url.searchParams.append('zoomType', "fullscreen")
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)


  return`${url}`
}