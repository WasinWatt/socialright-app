import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './Layout.css'
import { Link, withRouter } from 'react-router-dom'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

class DetectList extends Component {
    render() {
        return (
            <div className="main-layout">
                <Sidebar activeItem="detects" />
                <div className="content">
                    <h2>Your images that we found recently</h2>
                    <Item.Group divided>
                        <Item>
                            <Item.Image src='/assets/beach.jpg' />
                            <Item.Content>
                                <Item.Header as='a'>The sunset boat</Item.Header>
                                <Item.Meta>
                                    <span className='cinema'>Found on: https://www.fakeurl.co.th/your_picture</span>
                                </Item.Meta>
                                <Item.Description></Item.Description>
                                <Item.Extra>
                                    <Button color="green" floated='right'>
                                        Pursue
                                        <Icon name='right chevron' />
                                    </Button>
                                    <Button primary floated='right' onClick={() => this.props.history.push('/the-sunset-boat')}>
                                        More info
                                        <Icon name='right chevron' />
                                    </Button>
                                    <Label>USA</Label>
                                    <Label>June 2017</Label>
                                </Item.Extra>
                            </Item.Content>
                        </Item>

                        <Item>
                            <Item.Image src='/assets/dog.jpg' />

                            <Item.Content>
                                <Item.Header as='a'>Stray</Item.Header>
                                <Item.Meta>
                                    <span className='cinema'>Found on: https://www.fakeurl.co.th/your_picture</span>
                                </Item.Meta>
                                <Item.Description></Item.Description>
                                <Item.Extra>
                                    <Button color="green" floated='right'>
                                        Pursue
                                        <Icon name='right chevron' />
                                    </Button>
                                    <Button primary floated='right'>
                                        More info
                                        <Icon name='right chevron' />
                                    </Button>
                                    <Label>Thailand</Label>
                                    <Label>Feb 2016</Label>
                                </Item.Extra>
                            </Item.Content>
                        </Item>

                        <Item>
                            <Item.Image src='/assets/couple.jpg' />

                            <Item.Content>
                                <Item.Header as='a'>For the love of humans</Item.Header>
                                <Item.Meta>
                                    <span className='cinema'>Found on: https://www.fakeurl.co.th/your_picture</span>
                                </Item.Meta>
                                <Item.Description></Item.Description>
                                <Item.Extra>
                                    <Button color="green" floated='right'>
                                        Pursue
                                        <Icon name='right chevron' />
                                    </Button>
                                    <Button primary floated='right'>
                                        More info
                                        <Icon name='right chevron' />
                                    </Button>
                                    <Label>Couple</Label>
                                    <Label>Jan 2018</Label>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </div>
            </div>
        )
    }
}

export default withRouter(DetectList)