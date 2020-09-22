import React from 'react'
import { CategoryItem } from '../redux/reducers/filters';

interface ICategories {
    items: Array<string>,
    onClickItem: (name: CategoryItem) => void,
}

export const Categories: React.FC<ICategories> = ({ items, onClickItem }) => {

    const [activeItem, setActiveItem] = React.useState<CategoryItem>(null);

    const onSelectItem = (index: CategoryItem): void => {
        setActiveItem(index);
        onClickItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={`${activeItem === null ? 'active' : ''}`}
                    onClick={() => onSelectItem(null)}
                >Все</li>
                {items.map((name, index) => {
                    return (
                        <li className={`${activeItem === index ? 'active' : ''}`}
                            onClick={() => onSelectItem(index)}
                            key={`${name}_${index}`} >{name}</li>
                    )
                })}
            </ul>
        </div>
    )
}
