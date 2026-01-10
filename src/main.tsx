import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import ShopContextProvider  from './context/ShopContext.js'
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')! as HTMLElement).render(
  <StrictMode>
    <BrowserRouter >
      <ShopContextProvider>
          <App />
      </ShopContextProvider>
      
      </BrowserRouter>
  </StrictMode>
)
