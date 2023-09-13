import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
      maxWidth: 305,
      margin:'2rem',
      backgroundImage:'linear-gradient(to top,#251170,#eb83f8)',
      color:'#fff',
    },
    media: {
      height: 310,
    },
    contactBack:{
        backgroundColor:'#251170',
        padding:'0.5rem',
        fontWeight:'700',
        marginTop:'1rem'
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
    },
    allCard:{
        display:'flex',
        justifyContent:'space-evenly',
        flexWrap: 'wrap',
    },
    link:{
        textDecoration:'none',
        marginLeft:'2.5rem',
    },
    btnSource:{
        color:'white',
        fontWeight:'700',
        borderColor:'white',
        borderWidth:2,
        '&:hover':{
            color:'#66DE93',
            borderColor:'#66DE93',
            boxShadow:'2px 2px 7px #66DE93',
            borderWidth:2,
        }
    },
    btnVisit:{
        color:'#88FFF7',
        borderColor:'yellow',
        borderWidth:2,
        '&:hover':{
            boxShadow:'2px 2px 10px #88FFF7'
        }
    }
  });