import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    header:{
        height:50,
        backgroundColor:'black',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'orange',
    },
    headerText:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'white',
    },
    body:{
        display: 'flex',
        flexDirection: 'column',
        minWidth:'25%',
        maxWidth:'70%',
    },
    numop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '50%',
        padding: 15,
        margin: -15
    },
    visor: {
        backgroundColor: 'lightgrey',
        borderColor: 'darkgrey',
        borderWidth: 2,
    },
    textVisor:{
        padding:5,
        textAlign: 'center',
        fontSize: 20
    },
    inputNum:{
        height:50,
        textAlign: 'center',
        borderWidth: 2,
        fontSize:15,
    },
    button: {
        backgroundColor: 'black',
        width: '50%',
        padding: 10,
        alignItems: 'center',
        margin:1,
        borderWidth:2,
        borderColor:'orange',
        
    },
    textButton:{
        color: 'white',
        fontSize:20,
    },
    footerText:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
    },
})