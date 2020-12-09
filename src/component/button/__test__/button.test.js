import React from 'react';
import ReactDom from 'react-dom';

import Button from '../';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';


it('render button without crash', () => {
    const div = document.createElement('div');
    ReactDom.render(<Button />, div)
})

it('render button correctly', () => {
    const { getByTestId } = render(<Button label='button label' />);
    expect(getByTestId('button')).toHaveTextContent('button label')
})

it('render button correctly 1', () => {
    const { getByTestId } = render(<Button label='Save' />);
    expect(getByTestId('button')).toHaveTextContent('Save')
})

it('matches button snapshot', () => {
    const tree = renderer.create(<Button label='button label' />).toJSON();
    expect(tree).toMatchSnapshot();
})

it('matches button snapshot 2', () => {
    const tree = renderer.create(<Button label='button label 2' />).toJSON();
    expect(tree).toMatchSnapshot();
})
