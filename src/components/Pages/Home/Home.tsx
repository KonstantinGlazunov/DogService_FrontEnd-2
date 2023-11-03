import Carousels from "./Carousels/Carousels"
import Contents from "./Content/Contents"

import GetSittersForm from "../../../features/dogsitters/GetSittersForm"


const Home = (): JSX.Element => {
  return (
    <div>
      <Carousels />
      <GetSittersForm />
      <Contents />
      <Contents />
    </div>
  )
}
export default Home
