import React, { useState, useEffect, Fragment } from 'react';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';

import { Link } from 'react-router-dom';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('http://localhost:3000/dashboard');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = (data) => {
        // data.preventDefault();

        const user = {
            email: data.email,
            password1: data.password1,
            password2: data.password2
        };

        fetch('http://127.0.0.1:8000/api/v1/users/auth/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.key) {
                    localStorage.clear();
                    localStorage.setItem('token', data.key);
                    window.location.replace('http://localhost:3000/dashboard');
                } else {
                    setEmail('');
                    setPassword1('');
                    setPassword2('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };

    return (
        <div>
            <Row>
                <Col span={6} push={18}>
                    {/* col-18 col-push-6 */}
                </Col>
                <Col span={18} pull={6}>
                    <div style={{ width: 400, margin: '100px auto' }}>
                        {loading === false && <h1>Signup</h1>}
                        {errors === true && <h2>Cannot signup with provided credentials</h2>}
                        {loading === false && (
                            <Form
                                name="basic"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                style={{
                                    maxWidth: 600,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onSubmit}
                                onFinishFailed={onFinishFailed}
                                autoComplete="on"
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password1"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                
                                <Form.Item
                                    label="Confirm Password"
                                    name="password2"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password again!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                
                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit" style={{ margin: "0 10px" }}>
                                        Submit
                                    </Button>
                                    <Fragment>
                                        {' '}
                                        <Button htmlType="submit">
                                            <Link to='/'>Back</Link>                                            
                                        </Button>
                                    </Fragment>
                                </Form.Item>
                            </Form>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Signup;