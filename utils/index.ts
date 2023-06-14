export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '394aa919e7msh70f1fa551c6c942p1e1ae5jsn56ca649175c5',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    })

    const result = await response.json()
    return result
}