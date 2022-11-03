import ArticlesListHorizontal from '../ArticlesListHorizontal';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import * as testData from './test.data.json';

describe('ArticlesListHorizontal component test', () => {
    const { bundles } = testData;

    test("ArticlesListHorizontal component load correctly", () => {
        render(<ArticlesListHorizontal bundles={bundles} />);
        const wrapper = screen.getByTestId("horizontalArticles-wrapper");
        const component = screen.getByTestId("articleVerticleLayout-component");
        //check element exist
        expect(wrapper).toBeInTheDocument();
        expect(component).toBeInTheDocument();
    });

    test("ArticlesListHorizontal component should not load", () => {
        render(<ArticlesListHorizontal bundles={[]} />);
        const component = screen.getByTestId("articleVerticleLayout-component");

        expect(component).toBeDefined;
    });

    test("ArticlesListHorizontal component should match snapshot", () => {
        const element = renderer.create(<ArticlesListHorizontal bundles={bundles} />);
        expect(element.toJSON()).toMatchSnapshot();
    });
});
