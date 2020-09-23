import React from 'react'
import { Categories, LoadingBlock, PizzaBlock, SortPopup } from '../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzaState } from '../redux/reducers/pizzazs';
import { setCategory, setSortType } from '../redux/actions/filters';
import { CategoryItem, getFiltersState, SortByItem } from '../redux/reducers/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames: string[] = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems: Array<SortByItem> = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'asc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }
];

export const Home: React.FC = () => {

    const { items, isLoaded } = useSelector(getPizzaState);
    const { category, sortBy } = useSelector(getFiltersState);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index: CategoryItem) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((sortObj: SortByItem) => {
        dispatch(setSortType(sortObj));
    }, []);


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                    activeCategory={category}
                />

                <SortPopup
                    items={sortItems}
                    activeSortType={sortBy.type}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? items.map(obj => <PizzaBlock key={obj.id} {...obj} />) :
                        Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)
                }
            </div>
        </div>
    )
}
