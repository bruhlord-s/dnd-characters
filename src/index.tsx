import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { RecoilRoot } from "recoil"
import router from "./routes/router"
import UnderConstructionLayout from "./layouts/UnderConstruction"
import BaseLayout from "./layouts/Base"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BaseLayout>
        <UnderConstructionLayout>
          <RouterProvider router={router} />
        </UnderConstructionLayout>
      </BaseLayout>
    </RecoilRoot>
  </React.StrictMode>
)
