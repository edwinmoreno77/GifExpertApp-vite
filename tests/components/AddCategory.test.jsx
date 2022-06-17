import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('<AddCategory tests ', () => {

    test('should render AddCategory', () => {
        const { container } = render(<AddCategory onNewCategory={() => { }} />);
        // screen.debug();
        expect(container).toMatchSnapshot();

    }
    );

    test('should change the value of the text box', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'saitama' } });
        expect(input.value).toBe('saitama');

    });

    test('should call onNewCategory if the input has a value', () => {

        const inputValue = 'saitama';
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');

    });

});

