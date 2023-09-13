import { makeStyles } from "@material-ui/core";



export const useStyles=makeStyles((theme)=>({
    
    contactBack:{
        backgroundColor:'#251170',
        padding:'0.5rem',
        fontWeight:'700',
    },
    textInput:{
        margin:20,
    },
    btnSubmit:{
        fontWeight:'700',
        color:'#FB7AFC',
        borderColor:'#eb83f8',
        borderWidth:'2px',
        padding:'0.5rem 3rem',
        backgroundColor:'white',
        '&:hover':{
            color:'#f50057',
            borderWidth:'2px',
            borderColor:'#f50057'
        }
    },
    mapFull:{
        position:'relative',
        width:'100%',
        height:'100%',
    }
}))
