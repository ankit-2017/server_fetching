import React, {Component} from 'react'
import {fetchTitle} from '../actions/'
import {connect} from 'react-redux'


class Titles extends Component{
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.fetchTitle()
    }
    

    render(){
        return(
            <div>
                <h1>List of Titles from JSON server </h1>
                <ul>
                    {this.props.titles.map((item,i)=>{
                        return <li key={i}>{item.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({titles}) {
    
    return {titles}
}



export default {
    LoadData:({ dispatch })=> dispatch(fetchTitle()),
    component : connect(mapStateToProps, {fetchTitle})(Titles)
}