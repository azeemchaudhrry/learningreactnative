import {StyleSheet} from 'react-native';
import theme from '../../styles/style.theme'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.CONTAINER_PADDING,
        alignItems: 'center'
    },
    textAreaTitle: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        alignSelf: 'flex-start',
        padding: 10
    },
    textArea: {
        flex: 1,
        padding: theme.CONTAINER_PADDING,
        alignSelf: 'stretch',
        overflow: 'scroll',
        backgroundColor: theme.backgroundColor
    }
});

