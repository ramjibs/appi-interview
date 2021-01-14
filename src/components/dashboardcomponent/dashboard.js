import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Table } from '../../utlis/ui'
import * as actionCreatos from '../../store/actions'
const Dashboard = (props) => {

    useEffect(function getDahboardData() {
        props.data == null && props.onGetData()

    })

    return (
        <div>
            <Table
                tableData={props.data}
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.dashboard.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetData: () => dispatch(actionCreatos.dashboard())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
