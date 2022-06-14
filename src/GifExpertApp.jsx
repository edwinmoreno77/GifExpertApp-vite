import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku']);

    // const onAddCategory = () => {
    //     setCategories(['One Punch', ...categories]);
    // }

    return (
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })
                }
            </ol>
        </div>
    )
}
