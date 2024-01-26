// app.test.js
import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import  App from '../client/App'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('full app rendering/navigating', async () => {
  render(<App />, {wrapper: BrowserRouter})
  // const user = userEvent.setup()

  // verify page content for default route
  expect(screen.getByText(/investments/i)).toBeInTheDocument()
})