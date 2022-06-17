import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook } from "@testing-library/react";


describe('tests in the useFetchGifs hook ', () => {

    test('should return the initial state', () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;

        expect(images).toEqual([]);
        expect(isLoading).toBe(true);

    });

})