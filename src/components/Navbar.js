import React, { Component } from 'react'
import { Sidebar, Menu, Icon, Header} from 'semantic-ui-react'

class Navbar extends Component {
    render() {
        return (
            <Menu style={{ margin: 0 }}>
                <img src="assets/logo.png"  height="50" style={{ margin: "2.5vmin"}}/>
                <Menu.Menu position="right">
                    <Menu.Item name='home'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                        <Icon name='gamepad' />
                        About
                    </Menu.Item>
                    <Menu.Item name='camera'>
                        <Icon name='camera' />
                        Contact
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Navbar
