import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoContainer: {
        width: '80%',
        flexDirection: 'column',
        borderWidth: 3,
        borderRadius: '10%',
        borderColor: '#ffffff00',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 50,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#d6d6d6",
        boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.5)',
    },
    inputContainer: {
        width: '80%',
        borderColor: '#ffffff00',
        borderWidth: 2,
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },

});

export default styles;