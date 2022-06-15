import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';





export const GifGrid = ({ cat }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(cat);

        setImages(newImages);
    }

    useEffect(() => {
        getImages(cat);

    }, [])

    return (
        < >
            <h2>{cat}</h2>
            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}