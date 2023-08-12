import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { RecoilRoot } from "recoil"
import router from "./routes/router"
import BaseLayout from "./layouts/BaseLayout"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BaseLayout>
        <RouterProvider router={router} />
      </BaseLayout>
    </RecoilRoot>
  </React.StrictMode>
)
