import React, { Component } from 'react'
import { Sidebar, Menu, Icon, Header} from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {

    handleMenuClick = (event, {name}) => {
        this.props.history.push('/')
    }

    render() {
        return (
            <Menu style={{ margin: 0 }}>
                <Link to="/">
                    <img src="assets/logo.png"  height="50" style={{ margin: "2vmin"}}/>
                </Link>
                <Menu.Menu position="right">
                    <Menu.Item name='home' onClick={this.handleMenuClick}>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item name='address book' onClick={this.handleMenuClick}>
                        <Icon name='address book' />
                        About
                    </Menu.Item>
                    <Menu.Item name='phone square' onClick={this.handleMenuClick}>
                        <Icon name='phone square' />
                        Contact
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default withRouter(Navbar)
