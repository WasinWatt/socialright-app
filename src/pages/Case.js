import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './Layout.css'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

class Case extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'The sunset boat',
            img: 'assets/beach.jpg',
            caseId: '12fd5'
        }
    }
    render() {
        return (
            <div className="main-layout">
                <Sidebar activeItem="cases" />
                <div className="content">
                    <h2>We've done the hard part for you !</h2>
                    <div id="detect-content">
                        <img src={this.state.img} height="250px" />
                        <div style={{ marginLeft: "10vmin", marginRight: "10vmin" }}>
                            <p>The persuasion on <a>https://www.fakeurl.co.th/your_picture</a> was completed.
                            The compensation of <span style={{ color: "red" }}>15000 Baht</span> was transferred to your account successfully.</p>
                            <hr style={{ marginTop: "5vmin" }} />
                            <p>Thank you for trusting Socialright, and keep on creating good stuff !</p>
                            <p style={{ float: "right" }}>Socialright team</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Case