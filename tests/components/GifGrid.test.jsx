import { render } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('<GifGrid/> test ', () => {

    test('should render <GifGrid/>', () => {
        const { container } = render(<GifGrid />);
        expect(container).toMatchSnapshot();

    })
})