import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ cat }) => {

    const { images, isLoading } = useFetchGifs(cat)

    return (
        < >
            <h2>{cat}</h2>
            {isLoading && <h2>Loading...</h2>}
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