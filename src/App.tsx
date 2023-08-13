import { AnimatePresence } from "framer-motion"
import { FC } from "react"
import BaseLayout from "./layouts/BaseLayout"
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CharacterCreatorPage from "./pages/CharacterCreatorPage"

const App: FC = () => {
  const location = useLocation()

  return (
    <BaseLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
          <Route path="/creator" element={<CharacterCreatorPage />} />
        </Routes>
      </AnimatePresence>
    </BaseLayout>
  )
}

export default App
