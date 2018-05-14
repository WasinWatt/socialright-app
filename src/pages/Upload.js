import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './Layout.css'
import './Upload.css'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Upload extends Component {
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
                <Sidebar activeItem="contents" />
                <div className="content">
                    <div className="upload">
                    <div id="social-upload">
                        <h2>Syncronize</h2>
                        <div id="upload-icons">
                            <Card.Group>
                            <Card image="assets/facebook-icon.png">
                            </Card>
                            <Card image="assets/instagram-icon.png">
                            </Card>
                            <Card image="assets/twitter-icon.png">
                            </Card>
                            </Card.Group>
                        </div>
                    </div>
                    <div id="manual-upload">
                        <h2>Upload</h2>
                        <Card.Group>
                            <Card image="assets/laptop.png">
                            </Card>
                            <Card image="assets/dropbox.png">
                            </Card>
                        </Card.Group>
                    </div>
                    </div>
                    <div className="gallery">
                        <h2>Gallery</h2>
                        <hr style={{ marginBottom: "2%"}}/>
                        <Image.Group size="medium">
                            <Image src="assets/dog.jpg" bordered />
                            <Image src="assets/flower.jpg" bordered />
                            <Image src="assets/usa003.jpg" bordered />
                            <Image src="assets/road.jpg" bordered />
                            <Image src="assets/couple.jpg" bordered />
                        </Image.Group>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Upload