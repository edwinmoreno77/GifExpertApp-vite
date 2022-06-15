import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';





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
        <div className='card'>
            <h2>{cat}</h2>
            <li className='card-grid'>
                {
                    images.map(({ id, title, url }) => (
                        <>
                            <img className='card' src={url} key={id} />
                            <p>{title}</p>
                        </>
                    ))
                }
            </li>


        </div>
    )
}