import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('test GifItem.jsx', () => {

    const title = 'saitama';
    const url = 'https://i.gifer.com/no.gif';

    test('should render GifItem.jsx', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });


    test('should render img with URL and ALT', () => {

        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('should render p with title', () => {

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

})