import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ cat }) => {

    const { images, isLoading } = useFetchGifs(cat)

    return (
        < >
            <h2 className='animate__animated animate__fadeIn'>{cat}</h2>
            {isLoading && <h2 className='animate__animated animate__flash'>Loading...</h2>}
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