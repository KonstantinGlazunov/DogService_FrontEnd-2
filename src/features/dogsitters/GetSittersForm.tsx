import { useNavigate } from "react-router-dom"
import { FormEvent, useCallback, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import DogsittersList from "./DogsittersList"
import { loadDogsittersByCity } from "./dogsittersSlice"

export default function GetSittersForm(): JSX.Element {
  const [toggleStart, setToggleStart] = useState(false) //возвращает массив - деструктуризация
  const [toggleEmpty, setToggleEmpty] = useState(false) 
  const [city, setCity] = useState<string>("Berlin")
  const [size, setSize] = useState<string>("SMALL")
  const dispatch = useAppDispatch()

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
 
      dispatch(loadDogsittersByCity({ city }))
      e.preventDefault() //что б не перерходила на следующую страницу
      setToggleStart(true)
      
    }
     
    //useAppSelector получить массив собак, если пустой то тогл2 меняем на труе.
  
  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Find a dogsitter</h2>
        <h4>Where to look?</h4>
        <input
          type="text"
          className={`form-control`}
          placeholder="Your city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Find dogsitters
        </button>
      </form>
      {toggleStart && <DogsittersList />}
      {/* toggle2 && div - no dogSitters */}
    </div>
  )
}
 