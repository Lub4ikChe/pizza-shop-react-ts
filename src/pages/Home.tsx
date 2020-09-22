import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzaState } from '../redux/reducers/pizzazs';
import { setCategory } from '../redux/actions/filters';
import { CategoryItem } from '../redux/reducers/filters';

const categoryNames: string[] = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems: Array<{ name: string, type: string }> = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }
];

export const Home: React.FC = () => {

    const { items } = useSelector(getPizzaState);
    const dispatch = useDispatch();

    const onSelectCategory = React.useCallback((index: CategoryItem) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames} />

                <SortPopup
                    items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                }
            </div>
        </div>
    )
}
