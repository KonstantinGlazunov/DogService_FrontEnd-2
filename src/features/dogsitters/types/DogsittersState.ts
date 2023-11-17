import Dogsitter from "./Dogsitter"

export default interface DogsittersState {
  dogsitters: Dogsitter[]
  error?: string
}
