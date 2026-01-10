import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from "./Context/authContext.jsx";
import UserContext from './Context/userContext.jsx'
import ListingContext from './Context/listingContext.jsx'
import BookingContext from './Context/bookingContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContext>
      <UserContext>
        <ListingContext>
          <BookingContext>

            <App />
          </BookingContext>


        </ListingContext>
      </UserContext>
    </AuthContext>
  </BrowserRouter>

)
