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
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);


    });

    test("shouldn't call onNewCategory if input is empty ", () => {
        const inputValue = '';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalledTimes(1);
        expect(onNewCategory).not.toHaveBeenCalledWith(inputValue);

    });


});

