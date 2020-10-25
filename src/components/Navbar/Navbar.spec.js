mport React from 'react'
import { MemmoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Navbar from '.'

describe('Navbar', () => {
  test('should contains logo text', () => {
    const { getByText } = render(
      <MemmoryRouter>
        <Navbar />
      </MemmoryRouter>
    )
    expect(getByText(/logo/gi)).toBeInTheDocument()
  })