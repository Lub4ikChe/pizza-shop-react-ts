import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzaState } from '../redux/reducers/pizzazs';
import { setCategory } from '../redux/actions/filters';


export const Home: React.FC = () => {

    const { items } = useSelector(getPizzaState);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={(index) => dispatch(setCategory(index))}
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />

                <SortPopup
                    items={[
                        { name: 'популярности', type: 'popular' },
                        { name: 'цене', type: 'price' },
                        { name: 'алфавиту', type: 'alphabet' }
                    ]} />
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
