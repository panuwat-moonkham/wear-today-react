//global describe
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Navbar from '.'

describe('Navbar', () => {
  test('should render Logo layout correcyly', () => {
    const { Logo } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(Logo).toMatchSnapshot()
  })

  test('should have link navigate to home', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(getByText(/home/gi)).toBeInTheDocument()
    expect(getByText(/home/gi).closest('a')).toHaveAttribute('href', '/')
  })
  test('should have link navigate to post', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(getByText(/post/gi)).toBeInTheDocument()
    expect(getByText(/post/gi).closest('a')).toHaveAttribute('href', '/post')
  })
  test('should have link navigate to about', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(getByText(/about/gi)).toBeInTheDocument()
expect(getByText(/about/gi).closest('a')).toHaveAttribute('href', '/about')
  })
  test('should have link navigate to contact', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(getByText(/contact/gi)).toBeInTheDocument()
expect(getByText(/contact/gi).closest('a')).toHaveAttribute('href','/contact')
  })
  test('should have link navigate to help', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(getByText(/help/gi)).toBeInTheDocument()
expect(getByText(/help/gi).closest('a')).toHaveAttribute('href', '/help')
  })

  test('should render layout correcyly', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })
})