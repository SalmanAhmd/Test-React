import TestHookReducer from '../useReducer';
import { render, fireEvent, cleanup } from '@testing-library/react';
import * as Reducer from '../../../store/reducer';
import * as ACTIONS from '../../../store/actions';


afterEach(cleanup)

describe('test the reducer and actions', () => {
  it('should return the initial state', () => {
    expect(Reducer.initialState).toEqual({ stateprop1: false })
  })

  it('should change stateprop1 from false to true', () => {
    expect(Reducer.Reducer1(Reducer.initialState, ACTIONS.SUCCESS))
      .toEqual({ stateprop1: true })
  })
})

it('Reducer changes stateprop1 from false to true', () => {
  const { getByText } = render(<TestHookReducer />);

  expect(getByText(/stateprop1 is/i).textContent).toBe("stateprop1 is false")

  fireEvent.click(getByText("Dispatch Success"))

  expect(getByText(/stateprop1 is/i).textContent).toBe("stateprop1 is true")
})
