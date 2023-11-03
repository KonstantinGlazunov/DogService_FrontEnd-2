import Dogsitter from "./types/Dogsitter"


export async function getAll(): Promise<Dogsitter[]> {
  const res = await fetch("/api/dog-sitters")
  return res.json()
}
