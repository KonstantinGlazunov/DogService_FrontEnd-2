import Dogsitter from './types/Dogsitter'

export async function getAll(): Promise<Dogsitter[]> {
  const res = await fetch("/api/dog-sitters")
  return res.json()
}


export async function getByCityAndSize(city:string, size:string,zip:string): Promise<Dogsitter[]> {
  const res = await fetch(`/api/dog-sitters/search?city=${city}&dogSize=${size}&zip=${zip}`)

  return res.json()
}