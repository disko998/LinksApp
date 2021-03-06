import styled from 'styled-components/native'
import Foundation from 'react-native-vector-icons/Foundation'

import { Colors } from '../../styles/colors'

export const BookmarkIcon = styled(Foundation)`
    position: absolute
    top: -5px
    left: 15px
    color: ${Colors.mainBlue};
`
export const UniqueWrapper = styled.TouchableOpacity`
    position: absolute
    top: -10px
    right: -10px
`
