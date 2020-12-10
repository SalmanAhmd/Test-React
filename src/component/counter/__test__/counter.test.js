import Counter from '../';

import { mount } from 'enzyme';


// incorrect function assignment in the onClick method
// will still pass the tests.

test('the increment method increments count', () => {
  const wrapper = mount(<Counter />)

  expect(wrapper.instance().state.count).toBe(0)

  // wrapper.find('button.counter-button').simulate('click')
  // wrapper.setState({count: 1})
  wrapper.instance().increment()
  expect(wrapper.instance().state.count).toBe(1)
})
