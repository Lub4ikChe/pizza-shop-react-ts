import React from 'react'

interface ICategories {
    items: Array<string>,
}

export const Categories: React.FC<ICategories> = ({ items }) => {

    const [activeItem, setActiveItem] = React.useState<number | null>(null);

    const onSelectItem = (index: number | null): void => {
        setActiveItem(index);
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
