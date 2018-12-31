import React, { Component } from 'react';
import {FetchUser} from '../actions'
import {connect} from 'react-redux'

class Users extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.FetchUser()
        this.UserList1 = this.UserList1.bind(this)
    }

    UserList1() {
        return this.props.data.map((item, i)=>{
                return <li key={item.id} >{item.name}</li>
        })
    }
    
    render(){
        return(
            <div>
                <h2>this is user's list</h2>
                <ul>
                   {this.UserList1()}
                </ul>
            </div>
        )
    }
}
function  mapStateToProps(state) {
    return {
        data: state.users
    }
}


function LoadData(store) {
    return store.dispatch(FetchUser())
}



export default {
    LoadData,
    component: connect(mapStateToProps, {FetchUser})(Users)
}