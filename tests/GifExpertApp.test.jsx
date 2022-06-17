import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';





describe('GifExpertApp test', () => {

    test('should render correctly', () => {

        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
        // screen.debug();


    }
    );


});