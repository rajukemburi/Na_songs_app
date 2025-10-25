import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Export from "./App"


createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <App /> */}
    <Export/>
  </StrictMode>,
)
