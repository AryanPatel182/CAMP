import React, { Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';

import { Button, Modal, Space } from 'antd';

import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [logoutVisible, setLogoutVisible] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            setLogoutVisible(false);
        } else {
            setLogoutVisible(true);
        }
    }, []);

    const handleOk = e => {
        e.preventDefault();
        setIsModalOpen(false);

        fetch('http://127.0.0.1:8000/api/v1/users/auth/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.clear();
                window.location.replace('http://localhost:3000/');                
            });
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon /> 
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CAMP                                                                                                 
                    </Typography>
                    {logoutVisible && (<Button onClick={showModal}>                        
                        Logout
                    </Button>)}                                                    
                    <Modal title="Logout" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Logout">
                        <p>Are you sure you want to Logout?</p>
                    </Modal>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
