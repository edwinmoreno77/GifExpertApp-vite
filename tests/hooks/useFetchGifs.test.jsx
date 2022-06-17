import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";


describe('tests in the useFetchGifs hook ', () => {

    test('should return the initial state', () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;

        expect(images).toEqual([]);
        expect(isLoading).toBe(true);

    });

    test('should return an array of images and isloading false', async () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );

        const { images, isLoading } = result.current;
        // console.log(images);

        expect(images.length).toBe(10);
        expect(isLoading).toBe(false);



    })

})