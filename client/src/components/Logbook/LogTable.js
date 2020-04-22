import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFlights } from '../../actions/flightActions';
import MaterialTable from 'material-table';

function LogTable() {

    useEffect(() => {
        
    }, [])

    const propTypes = {
        getFlights: PropTypes.func.isRequired,
        flight: PropTypes.object.isRequired
    }

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    flight: state.flight
})

export default connect(mapStateToProps, { getFlights })(LogTable)
