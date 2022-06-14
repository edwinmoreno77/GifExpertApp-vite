import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku']);

    const onAddCategory = (newCat) => {
        setCategories([newCat, ...categories]);
    }

    return (
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={newCat => onAddCategory(newCat)} />
            <ol>
                {categories.map(cat => {
                    return <li key={cat}>{cat}</li>
                })
                }
            </ol>
        </div>
    )
}
