import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './Layout.css'
import { Link, withRouter } from 'react-router-dom'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'
import firebase from '../firebase'

class DetectList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        var databaseRef = firebase.database().ref('contents')
        databaseRef.on('value', snapshot => {
            let tempData = []
            snapshot.forEach(data => {
                tempData.push(data.val())
            })
            this.setState({ data: tempData })
        })
    }

    renderDetectItem() {
        return (
            <Item.Group>
                {this.state.data.map(content => {
                    return (
                    <Item>
                        <Item.Image src={content.imageUrl} />
                        <Item.Content>
                            <Item.Header as='a'>{content.name}</Item.Header>
                            <Item.Meta>
                                <span className='cinema'>Found on: https://www.fakeurl.co.th/your_picture</span>
                            </Item.Meta>
                            <Item.Description></Item.Description>
                            <Item.Extra>
                                <Button color="green" floated='right'>
                                    Pursue
                                        <Icon name='right chevron' />
                                </Button>
                                <Button primary floated='right' onClick={() => this.props.history.push('/found?name='+content.name)}>
                                    More info
                                        <Icon name='right chevron' />
                                </Button>
                                <Label>USA</Label>
                                <Label>June 2017</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    )
                })}
            </Item.Group>
        )
    }

    render() {
        return (
            <div className="main-layout">
                <Sidebar activeItem="detects" />
                <div className="content">
                    <h2>Your images that we found recently</h2>
                    {this.renderDetectItem()}
                </div>
            </div>
        )
    }
}

export default withRouter(DetectList)