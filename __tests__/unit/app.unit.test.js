import React from 'react'
import { BrowserRouter, MemoryRouter, useLocation } from 'react-router-dom'
import '@testing-library/jest-dom'

import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../../client/App';

test('full app rendering/navigating', async () => {
  render(<App />, {wrapper: BrowserRouter});
  fireEvent.click(screen.getByText('Dashboard'))
  const items = await screen.findAllByText(/Investments/);
  // expect(items).toBe()
})

// check location using useLocation: https://reactrouter.com/en/main/hooks/use-location#locationsearch