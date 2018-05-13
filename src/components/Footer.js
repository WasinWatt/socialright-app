import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>© 2018 by Socialright.</p>
                <div className="icon">
                    <Icon name="facebook f" size="large"/>
                    <Icon name="google plus" size="large"/>
                    <Icon name="twitter" size="large"/>
                </div>
            </div>
        )
    }
}

export default Footer