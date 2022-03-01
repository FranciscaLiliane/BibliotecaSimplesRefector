import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    search:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px",
    },

    input:{
        padding: "10px",
        border: "1px",
        borderRadius:"5px",
        width: "100%",
        minWidth:350,
    },
    erro:{
        color: "red"
    },
    button:{
        padding: "10px",
        border: "1px",
        borderRadius:"5px",
        backgroundColor: "#00ffff",
        color: "black",
        width: "100px",
    },
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: 350,
        minWidth:"150px",
    },
    h1:{
        top:"30px",
    }
})