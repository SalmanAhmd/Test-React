// Link.react.test.js
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Link from '../';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    /* fire events that update state */
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    /* fire events that update state */
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
