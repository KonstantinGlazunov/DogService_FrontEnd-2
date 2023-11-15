/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectDogsitters } from "./selectors"
import { loadDogsitters } from "./dogsittersSlice"

export default function DogsittersList() {
  const dogsitters = useAppSelector(selectDogsitters)
  //вызов функции при первом ренедеринге
  const dispatch = useAppDispatch()
 /*useEffect(() => {
    dispatch(loadDogsitters())
  }, [dispatch])*/
  
  return (
    <div>
      <h1>DogSittersList</h1>
      {dogsitters.map((dogsitter) => (
        <li key={dogsitter.id}>
          <a href="https://dogsy.ru/sitter/17181">
            {" "}
            {/*нужно сделать динамическую ссылку на страницу DogSiter*/}
            <div>
              {dogsitter.firstName} {dogsitter.lastName.charAt(0)}.{" "}
            </div>
            <div>{dogsitter.city}</div>
            <div>{dogsitter.zip}</div>
            <div>{dogsitter.dogSize}</div>
          </a>
        </li>
      ))}
    </div>
  )
}
