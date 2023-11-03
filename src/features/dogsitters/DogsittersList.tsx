import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectDogsitters } from "./selectors"
import { loadDogsitters } from "./dogsittersSlice"

export default function DogsittersList() {
  const dogsitters = useAppSelector(selectDogsitters) //products.products
  //вызов функции при первом ренедеринге
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadDogsitters()) //повесить на кнопку
  }, [dispatch])
  return (
    <div>
      <h1>DogSittersList</h1>
      {dogsitters.map((dogsitter) => (
        <li key={dogsitter.id}>
          {dogsitter.firstName}
         <div>{dogsitter.about}</div>  {/*сюда img */}
        </li>
      ))}
    </div>
  )
}
