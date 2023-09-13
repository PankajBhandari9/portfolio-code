import { makeStyles } from "@material-ui/core";


// Home style
export const useStyle = makeStyles({
    headingBig: {
        fontWeight: '600',
    },
    root: {
        maxWidth: 345,
    },
    btn: {
        marginLeft: 16,
        backgroundColor: 'black',
        color: 'white',
        zIndex: 5,
        fontSize: '1rem',
        opacity: '0.85',
        "&:hover": {
            backgroundColor: 'black',
            color: 'pink',
            opacity: 1,
        },
    },
    link: {
        textDecoration: 'none',
    },


})
