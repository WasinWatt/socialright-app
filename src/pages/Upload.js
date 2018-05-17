import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './Layout.css'
import './Upload.css'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import firebase from '../firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'The sunset boat',
            img: 'assets/beach.jpg',
            isUploading: false,
            progress: 0,
            file: '',
            imgUrls: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        var databaseRef = firebase.database().ref('contents')
        databaseRef.on('value', snapshot => {
            let tempUrls = []
            snapshot.forEach(data => {
                tempUrls.push(data.val().imageUrl)
            })
            this.setState({imgUrls: tempUrls})
        })
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
    handleProgress = (progress) => this.setState({ progress })
    handleUploadError = (error) => {
        this.setState({ isUploading: false })
        console.error(error)
    }
    handleUploadSuccess = (filename) => {
        this.setState({ file: filename, progress: 0, isUploading: false })
        firebase.storage().ref('images').child(filename).getDownloadURL()
        .then(url => {
            firebase.database().ref('contents').push({
                imageUrl: url,
                name: filename
            })
        })
        .then(() => {
            alert(`Upload ${filename} successful.`)
        })
    }

    renderGallery() {
        return (
            <Image.Group size="medium">
                {this.state.imgUrls.map(url => 
                    <Image src={url} bordered />
                )}
            </Image.Group>
        )
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
                                <CustomUploadButton
                                    as="input"
                                    accept="image/*"
                                    storageRef={firebase.storage().ref('images')}
                                    onUploadStart={this.handleUploadStart}
                                    onUploadError={this.handleUploadError}
                                    onUploadSuccess={this.handleUploadSuccess}
                                    onProgress={this.handleProgress}
                                    style={{ zIndex: 2 }}
                                    ><img src="assets/laptop.png" height="75px" /></CustomUploadButton>
                            </Card>
                            <Card image="assets/dropbox.png">
                            </Card>
                        </Card.Group>
                        {this.state.progress > 0 ? <p style={{ marginTop: '2%', color:"red" }}>Uploading: {this.state.progress}%</p> : null}
                        
                    </div>
                    </div>
                    <div className="gallery">
                        <h2>Gallery</h2>
                        <hr style={{ marginBottom: "2%"}}/>
                        {this.renderGallery()}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Upload