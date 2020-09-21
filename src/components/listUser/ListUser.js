import { connect } from 'react-redux'
import React from 'react'

  function ListUser(props) {
    return (
        <div>
            <p> This is list user screen</p>
            <p> This is action used redux : {props.name} </p>
            <button onClick={props.add}>Add</button>
            <button onClick={props.listAll}>ListAll</button>
            <button onClick={props.deleteData}>Delete</button>
            <button onClick={props.update}>Update</button>
        </div>
    )
}

// special method to map state of store to props
function mapStateToProps(state) {
    return {
        name: state.name
    }
}
// spcial method to map dispatch to props

function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch({ type: 'add' }),
        update: () => dispatch({ type: 'update' }),
        listAll: () => dispatch({ type: 'list_all' }),
        deleteData: () => dispatch({ type: 'delete' })

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListUser)
