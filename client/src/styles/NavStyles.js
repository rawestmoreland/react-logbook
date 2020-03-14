import {makeStyles} from '@material-ui/core/styles'
import variables from './variables'

const {color} = variables
 
const navStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    menuBar: {
        backgroundColor: color.darkBlue
    },
    title: {
        flexGrow: 1,
    }
}))


export default navStyles