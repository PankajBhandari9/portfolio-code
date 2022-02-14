import { makeStyles, createStyles } from "@material-ui/core"
// About style
export const useStyle=makeStyles(()=>createStyles({
    headingBig:{
        fontWeight:'800'
    },
    aboutDetails:{
        margin:"1.5rem 0 0",
        display:'inline-block',
    },
    stats:{
        backgroundColor:'#251170'
    },
}))