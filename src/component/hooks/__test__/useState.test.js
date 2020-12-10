import UseState from '../useState';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../../../App'

afterEach(cleanup)

it('Text in state is changed when button clicked', () => {
  const { getByText } = render(<UseState />);

  expect(getByText(/Initial/i).textContent).toBe("Initial State")

  fireEvent.click(getByText("State Change Button"))

  expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
})


it('button click changes props', () => {
  const { getByText } = render(
    <App>
      <UseState />
    </App>
  )

  expect(getByText(/Moe/i).textContent).toBe("Moe")

  fireEvent.click(getByText("Change Name"))

  expect(getByText(/Steve/i).textContent).toBe("Steve")
})
