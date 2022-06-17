import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('<GifGrid/> test ', () => {
    const cat = 'Goku';

    test('should render <GifGrid/>', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        const { container } = render(<GifGrid cat={cat} />);
        expect(container).toMatchSnapshot();

    })

    test('should render <GifGrid/> with loading and category', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid cat={cat} />);
        screen.getByText('Loading...');
        screen.getByText(cat);
        // screen.debug();

    })

    test('should display items when images are loaded from useFetch', () => {
        useFetchGifs.mockReturnValue({
            images: [
                {
                    id: '123',
                    title: 'Goku',
                    url: 'https://media1.giphy.com/media/3o7btLq1Qz7qQqQq2U/giphy.gif'
                },
                {
                    id: '456',
                    title: 'Vegeta',
                    url: 'https://media1.giphy.com/media/3o7btLq1Qz7qQqQq2U/giphy.gif'
                }
            ],

            isLoading: false,
        });

        render(<GifGrid cat={cat} />);
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);

    })
})