import React from 'react'
import { BrowserRouter, MemoryRouter, useLocation } from 'react-router-dom'
import '@testing-library/jest-dom'

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../../client/App.jsx';

test('full app rendering/navigating', async () => {
  render(<App />, {wrapper: BrowserRouter})
  const user = userEvent.setup()

  // verify page content for default route
  expect(screen.getByText(/cryptique/i)).toBeInTheDocument()
})

// check location using useLocation: https://reactrouter.com/en/main/hooks/use-location#locationsearch