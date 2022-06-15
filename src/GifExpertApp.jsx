import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku']);

    const onAddCategory = (newCat) => {
        if (categories.includes(newCat)) return;
        setCategories([newCat, ...categories]);
    }

    return (
        <div>
            <h1>Gif Expert App</h1>
            <AddCategory onNewCategory={newCat => onAddCategory(newCat)} />
            <ol>
                {categories.map(cat => (<GifGrid cat={cat} key={cat} />))}
            </ol>
        </div>
    )
}
