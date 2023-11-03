import { useNavigate } from "react-router-dom"
import { FormEvent, useCallback, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import DogsittersList from "./DogSittersList"

export default function GetSittersForm(): JSX.Element {
  const [toggle, setToggle] = useState(false) //возвращает массив 
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    setToggle(true)
  }
  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Dog sitters request FORM</h2>

        <button type="submit" className="btn btn-primary">
          Get Dogsitters
        </button>
      </form>
      {toggle && <DogsittersList />}
    </div>
  )
}
