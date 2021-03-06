import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    info:{
        display: "flex",
        alignItems:"center",
    },
    link:{
        transform: "rotate(-45deg)",
        marginRight: "10px"
        
    },
    linkText:{
        wordBreak: "break-all"
    },
    icon:{
        marginRight: "10px"
    },
    container:{
        padding: "10px",
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: "#00ffff",
        marginBottom: "10px",
        flexDirection: 'column'
    },
    boxContainer: {
        backgroundColor: "#00ffff",
        width:"100%",
        height:"100%",

    },
})