import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./components/Pages/Home/Home"
import About from "./components/Pages/About/About"
import Contact from "./components/Pages/Contacts/Contacts"

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
