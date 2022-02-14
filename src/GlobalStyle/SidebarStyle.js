import { makeStyles } from "@material-ui/core"

export const useStyles=makeStyles({
    list: {
        width: 300,
      },
      fullList: {
        width: 'auto',
      },
      menuIcn: {
        color: 'white',
        fontSize: 40,
        "&:hover":{
          color:'#eb83f8'
        }
      },
      link: {
        textDecoration: 'none',
        color: 'white',
        "&:hover":{
          color:'#eb83f8'
        }
      },
      menuFix:{
        position:'fixed',
        zIndex:7,
        top:3
      },

})