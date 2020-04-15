import React, { useState } from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListIcon from '@material-ui/icons/List'
import FlightIcon from '@material-ui/icons/Flight';
import AssessmentIcon from '@material-ui/icons/Assessment'

const MenuComponent = ({text, index}) => {

    // Boolean for the list item collapse menu
    const [open, setOpen] = useState(false);

    // Click handler for the list item collapse menu
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
        <ListItem button aria-controls={index} aria-haspopup="true" onClick={handleClick}>
            <ListItemIcon>
                {index === 0 ? <ListIcon /> : index === 1 ? <FlightIcon /> : index === 2 && <AssessmentIcon />}
            </ListItemIcon>
            <ListItemText primary={text}/>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            {
                //Conditionally render the submenus based on the index
                index === 0 ?
                <List>
                    {["Pilot Logbook", "Ground Instruction", "Certificates / Medical"].map((text) => (
                      <ListItem key={text}>
                          <ListItemText primary={text}/>
                      </ListItem>  
                    ))}
                </List>
                :
                index === 1 ? 
                <List>
                    {["Aircraft List"].map((text) => (
                      <ListItem key={text}>
                          <ListItemText primary={text}/>
                      </ListItem>  
                    ))}
                </List>
                :
                index === 2 &&
                <List>
                    {["Pilot Currency"].map((text) => (
                      <ListItem key={text}>
                          <ListItemText primary={text}/>
                      </ListItem>  
                    ))}
                </List>
            }
        </Collapse>
        </>
    )
}

export default MenuComponent
