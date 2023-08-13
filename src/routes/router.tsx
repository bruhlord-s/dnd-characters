import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"
import CharacterCreatorPage from "../pages/CharacterCreatorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/creator",
    element: <CharacterCreatorPage />,
  },
])

export default router
