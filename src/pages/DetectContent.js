import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './Layout.css'
import './DetectContent.css'
import firebase from '../firebase'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

class DetectContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'The sunset boat',
            imageUrl: 'assets/beach.jpg'
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        const qs = _.split(this.props.location.search, '=')
        const imgName = qs[1]
        var databaseRef = firebase.database().ref('contents')
        databaseRef.once('value', snapshot => {
            let tempData
            snapshot.forEach(data => {
                if (data.val().name == imgName) {
                    tempData = data.val()
                }
            })
            this.setState({ name: tempData.name, imageUrl: tempData.imageUrl })
        })
    }
    render() {
        return (
            <div className="main-layout">
                <Sidebar activeItem="detects" />
                <div className="content">
                    <h2>Your {this.state.name} was found.</h2>
                    <div id="detect-content">
                        <img src={this.state.imageUrl} height="250px"/>
                        <div style={{marginLeft:"10vmin", marginRight:"10vmin"}}>
                            <p>Your photo seems to appear on this site:</p>
                            <p><a>https://www.fakeurl.co.th/your_picture</a></p>
                            <Button color="orange" onClick={() => { this.props.history.push('/case-list') }}>Pursue</Button>
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