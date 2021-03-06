import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

import {
    BarWrapper,
    SearchInput,
    SettingsIcon,
    SearchIcon,
    Button,
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { searchChange, selectFilter } from '../../redux/stores'
import { fbAnalytics } from '../../firebase'

export default function SearchBar() {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const filter = useSelector(selectFilter)
    const { t } = useTranslation()
    const inputRef = React.useRef()

    const onSearch = React.useCallback(
        value => {
            dispatch(searchChange(value))
        },
        [dispatch],
    )

    const logEvent = React.useCallback(() => {
        filter.trim().length && fbAnalytics.logSearch({ search_term: filter })
    }, [filter])

    return (
        <BarWrapper>
            <Button
                onPress={
                    filter.length
                        ? () => onSearch('')
                        : () => inputRef.current && inputRef.current.focus()
                }>
                {filter.length ? (
                    <SearchIcon name="close" size={30} />
                ) : (
                    <SearchIcon name="search" size={30} />
                )}
            </Button>

            <SearchInput
                ref={inputRef}
                clearButtonMode="always"
                placeholder={t('search')}
                value={filter}
                onChangeText={onSearch}
                onSubmitEditing={logEvent}
            />
            <Button onPress={navigation.openDrawer}>
                <SettingsIcon name="settings" size={35} />
            </Button>
        </BarWrapper>
    )
}
