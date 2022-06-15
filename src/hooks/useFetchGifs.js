import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = (cat) => {

    const [images, setImages] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(cat);
        setImages(newImages);
        setIsLoading(false);
    }


    useEffect(() => {
        getImages();
    }, []);


    return {
        images: images,
        isLoading: isloading
    }

}
