import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from '../../styles/styles';
import { getFlights } from '../../actions/flightActions';
import MaterialTable from 'material-table';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const LogTable = () => {

    const classes = useStyles();
    const theme = useTheme();

    const flight = useSelector(state => state.flight);

    const dispatch = useDispatch();

    useEffect(() => {
    }, [])

    return (
        <>
        {`${flight.loading}`}
        </>
    )
}

export default LogTable;
