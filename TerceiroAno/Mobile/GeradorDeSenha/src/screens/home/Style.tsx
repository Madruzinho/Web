import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#4d4d4d',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoContainer: {
        width: '80%',
        flexDirection: 'column',
        borderColor: 'white',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 50,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#4d4d4d",
    },
    inputContainer: {
        width: '80%',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        flexDirection: 'column'
    },

});

export default styles;