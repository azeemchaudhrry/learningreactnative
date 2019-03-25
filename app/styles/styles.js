import {StyleSheet} from 'react-native';
import theme from './style.theme';

export default StyleSheet.create({
    largeButtonText: {
        fontSize: theme.FONT_SIZE_LARGE,
        fontWeight: theme.FONT_WEIGHT_BOLD
    },
    mediumButtonText: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_MEDIUM
    },
    smallButtonText: {
        fontSize: theme.FONT_SIZE_SMALL,
        fontWeight: theme.FONT_WEIGHT_LIGHT
    }
});