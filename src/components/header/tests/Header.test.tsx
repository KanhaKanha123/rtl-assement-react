import Header from '../Header';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe.skip('Header component test', () => {

    test("Header component load correctly", () => {
        render(<Header/>);
        const wrapper=screen.getByTestId("header-wrapper-div");
        const headerContainer=screen.getByTestId("header-container-div");
        const headerAnchor=screen.getByTestId("header-a");
        const headerLoginText=screen.getByTestId("header-login");
       
        //check element exist
        expect(wrapper).toBeInTheDocument();
        expect(headerContainer).toBeInTheDocument();
        expect(headerAnchor).toBeInTheDocument();
        expect(headerLoginText).toBeInTheDocument();
    });

    test("Header component should match snapshot", () => {
        const element = renderer.create(<Header/>);
        expect(element.toJSON()).toMatchSnapshot();
    });
})
