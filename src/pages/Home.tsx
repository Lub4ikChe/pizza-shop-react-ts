import React from 'react'
import { Categories, LoadingBlock, PizzaBlock, SortPopup } from '../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzaState } from '../redux/reducers/pizzazs';
import { setCategory, setSortType } from '../redux/actions/filters';
import { CategoryItem, getFiltersState, SortByItem } from '../redux/reducers/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { IPizzaItemInCart } from '../redux/reducers/cart';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames: string[] = ['Meats', 'Vegetarian', 'Grill', 'Sharp', 'Covered'];
const sortItems: Array<SortByItem> = [
    { name: 'popularity', type: 'rating', order: 'desc' },
    { name: 'price', type: 'price', order: 'asc' },
    { name: 'alphabet', type: 'name', order: 'asc' }
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

    const onAddPizzaToCart = (pizzaObj: IPizzaItemInCart) => {
        dispatch(addPizzaToCart(pizzaObj));
    }


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
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {
                    isLoaded ? items.map(obj => <PizzaBlock
                        onPizzaToCart={onAddPizzaToCart}
                        key={obj.id} {...obj} />) :
                        Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)
                }
            </div>
        </div>
    )
}
