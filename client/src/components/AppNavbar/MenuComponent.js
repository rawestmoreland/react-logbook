import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { Typography } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'rgba(0,0,0,0.54)'
    }
}));

const MenuComponent = ({text, index}) => {

    const theme = useTheme();
    const classes = useStyles();

    // Boolean for the list item collapse menu
    const [open, setOpen] = useState(false);

    // Click handler for the list item collapse menu
    const handleClick = () => {
        setOpen(!open);
    }

    // A sub-menu object with text for the menu item and 
    // a path for the router.
    const subMenu = {
        Flights: [
            {
                path: '/',
                text: 'Pilot Logbook'
            },
            {
                path: '/groundinstruction',
                text: 'Ground Instruction'
            },
            {
                path: '/certificates',
                text: 'Certificates / Medical'
            },
        ],
        Aircraft: [
            {
                path: '/aircraft',
                text: 'Aircraft List'
            }
        ],
        Analysis: [
            {
                path: '/currency',
                text: 'Pilot Currency'
            }
        ]
    }

    return (
        <>
        <ListItem button aria-controls={index} aria-haspopup="true" onClick={handleClick}>
            <ListItemIcon>
                {index === 0 ? <ListIcon /> : index === 1 ? <FlightIcon /> : index === 2 && <AssessmentIcon />}
            </ListItemIcon>
            <ListItemText>
                <Typography variant="h6" className={classes.root}>
                    {text}
                </Typography>
            </ListItemText>
            {open ? <ExpandLess className={classes.root} /> : <ExpandMore className={classes.root} />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
                {/* 
                We'll map through the array for the menuItem that we're
                generating a sub-menu for 
                */}
                {subMenu[text].map((item) => (
                    <ListItem color='inherit' component={Link} to={item.path} key={item.text} className="subMenuText">
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Collapse>
        </>
    )
}

export default MenuComponent
