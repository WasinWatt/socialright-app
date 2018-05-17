import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './Layout.css'
import './DetectContent.css'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

class DetectContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'The sunset boat',
            img: 'assets/beach.jpg',
            evidence: 'assets/'
        }
    }
    render() {
        return (
            <div className="main-layout">
                <Sidebar activeItem="detects" />
                <div className="content">
                    <h2>Your {this.state.name} was found.</h2>
                    <div id="detect-content">
                        <img src={this.state.img} height="250px"/>
                        <div style={{marginLeft:"10vmin", marginRight:"10vmin"}}>
                            <p>Your photo seems to appear on this site:</p>
                            <p><a>https://www.fakeurl.co.th/your_picture</a></p>
                            <Button color="orange">Pursue</Button>
                            <hr style={{marginTop: "5vmin"}}/>
                            <p>By choosing to pursue, our team will
                            contact the owner of the content about this copyright issue.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetectContent