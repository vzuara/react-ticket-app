import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { UiProvider } from './context/UiContext'
import { RouterPage } from './pages/RouterPage'

export const TicketApp = () => {
  return (
    <UiProvider>
      <BrowserRouter>
        <RouterPage />
      </BrowserRouter>
    </UiProvider>
  )
}
