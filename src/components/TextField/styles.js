import styled from 'styled-components/native'

import { Colors } from '../../styles/colors'

export const Wrapper = styled.ScrollView`
    width: 100%
    background: ${Colors.white}
    border: 1.5px solid ${Colors.lightGray}
    border-radius: 5px
    overflow: visible
    
    margin-vertical: 10px
`

export const StyledTextInput = styled.TextInput`
    flex: 1
    height: 50px
    color: ${Colors.orange}
    font-size: 16px
    font-weight: bold
    background: ${Colors.white}
    padding: 10px
`