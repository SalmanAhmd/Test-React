import Basic from '../';

import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';


// import TestRenderer from 'react-test-renderer';
// import ShallowRenderer from 'react-test-renderer/shallow';


// Basic Test with React-test-renderer
// it('renders correctly react-test-renderer', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<Basic />);
//   const result = renderer.getRenderOutput();
//   expect(result).toMatchSnapshot();
// });


// Basic Test with Enzyme
it('renders correctly enzyme shallow', () => {
  const wrapper = shallow(<Basic />)
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders correctly enzyme mount', () => {
  const wrapper = mount(<Basic />)
  expect(toJson(wrapper)).toMatchSnapshot();
  wrapper.unmount();
});
