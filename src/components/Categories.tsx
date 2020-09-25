import React from 'react'
import { CategoryItem } from '../redux/reducers/filters';

interface ICategories {
    items: Array<string>,
    onClickCategory: (index: CategoryItem) => void,
    activeCategory: CategoryItem

}

export const Categories: React.FC<ICategories> = React.memo(({ items, onClickCategory, activeCategory }) => {

    return (
        <div className="categories">
            <ul>
                <li className={`${activeCategory === null ? 'active' : ''}`}
                    onClick={() => onClickCategory(null)}
                >All</li>
                {items.map((name, index) => {
                    return (
                        <li className={`${activeCategory === index ? 'active' : ''}`}
                            onClick={() => onClickCategory(index)}
                            key={`${name}_${index}`} >{name}</li>
                    )
                })}
            </ul>
        </div>
    )
}
)