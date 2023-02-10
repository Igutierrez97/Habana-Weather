import axios from 'axios'

export const getClima = async () => {
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?lat=23.135305&lon=-82.3589631&units=metric&appid=e7e4f1df8c1a33621e2036b8c1033891`
  )
  return data.list[0]
}

export const getClimaNextDay = async () => {
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?lat=23.135305&lon=-82.3589631&units=metric&appid=e7e4f1df8c1a33621e2036b8c1033891`
  )
  return data.list
}