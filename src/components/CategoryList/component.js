import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Category } from '../Category'
import { HorizontalScroll, CategoryWrapper } from './styles'
import {
    fetchStoresAsync,
    selectCurrentCategory,
    selectCategories,
} from '../../redux/stores'
import { fbAnalytics } from '../../firebase'

export default function CategoryList() {
    const currentCategory = useSelector(selectCurrentCategory)
    const categories = useSelector(selectCategories)
    const dispatch = useDispatch()

    const onCategoryPress = React.useCallback(
        async category => {
            dispatch(fetchStoresAsync(category.title))
            const res = await fbAnalytics.logSelectContent({
                content_type: 'category',
                item_id: 'P12453',
            })

            console.log(res)
        },
        [dispatch],
    )

    return (
        <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
            <CategoryWrapper>
                <Category
                    icon="bookmark"
                    title="My list"
                    active={currentCategory === 'my list'}
                    onPress={() => onCategoryPress({})}
                />
            </CategoryWrapper>

            {categories.map(category => (
                <CategoryWrapper key={category.id}>
                    <Category
                        icon={category.icon}
                        title={category.title}
                        active={currentCategory === category.title}
                        onPress={() => onCategoryPress(category)}
                    />
                </CategoryWrapper>
            ))}
        </HorizontalScroll>
    )
}
