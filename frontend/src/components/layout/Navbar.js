
import React, { useState, useEffect, Fragment } from 'react';
import { Col, Row, Card, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { margin } from '@mui/system';
import HomeSlider from './HomeSlider';

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true);
        }
    }, []);

    return (
        <nav>
            <Row>
                <Col>
                    <h1></h1>
                </Col>
            </Row>
            {/* <Row> 
                <Col>
                    <HomeSlider />                         
                </Col>               
            </Row> */}
            <Row>
                <Col span={12}>
                    <Card
                        title="Hey There!"
                        hoverable={true}                        
                        bordered={false}
                        style={{
                            width: 300,
                            margin: "auto"
                        }}
                    >
                        {isAuth === true ? (
                            <Fragment>
                                {' '}
                                <li>
                                    <Link to='/dashboard'>Dashboard</Link>
                                </li>                                
                            </Fragment>
                        ) : (
                            <Fragment>
                                {' '}
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                                <li>
                                    <Link to='/signup'>Signup</Link>
                                </li>
                            </Fragment>
                        )}
                    </Card> 
                </Col>
                {/* <Col span={12}>
                    <Card
                        title="Card title"
                        hoverable={true}
                        bordered={false}
                        style={{
                            width: 300,
                            margin: "auto"
                        }}
                    >
                        <p>Card content</p>
                        <p>Card content</p>                        
                    </Card> 
                </Col> */}
            </Row>
        </nav>
    );
};

export default Navbar;