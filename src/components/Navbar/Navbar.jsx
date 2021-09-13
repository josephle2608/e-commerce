//The file is created for a navigation bar of the website.

import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography, Toolbar } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
        {/* // AppBar for the navigation bar */}
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <typography component={Link} to="/" variant="h6" className={classes.title} color="inherit"> 
                        <img src={logo} alt="Commerce.js" height="25px" classsName={classes.image} />
                         WELCOME TO E-COMMERCE!
                    </typography>
                    <div className={classes.grow} />
                {/* // if the location is at the Navbar, it would show the shopping cart icon. 
                    The syntax is created to make sure the icon would not show up at Cart page and other pages*/}
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                        {/* // added the icon of shopping cart */}
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}

                </Toolbar>
            </AppBar> 
            
        </>
    )
};


export default Navbar
