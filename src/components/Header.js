import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Grid, Row, Col, Panel } from 'react-bootstrap'
import '../CSS/custom.css'

class Header extends Component{
    render(){
        return(
            <div id="header">
                <Grid>
                    
                        <Row>
                            
                                <Col md={3}>
                                    <div className="colDiv">
                                        <Link to="/">REACT SSR </Link>
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <div className="colDiv">
                                        <ul>
                                            <li>
                                                <Link to="/users">View users</Link>
                                            </li>
                                            <li>
                                                <Link to="/titles">Title Page</Link>
                                            </li>
                                        </ul>
                                         
                                    </div>
                                </Col>
                            
                        </Row>
                    
                </Grid>
            </div>
        )
    }
}
export default Header