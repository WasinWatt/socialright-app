import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import './Layout.css'
import { Link, withRouter } from 'react-router-dom'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

class CaseList extends Component {
    render() {
        return (
            <div className="main-layout">
                <Sidebar activeItem="cases" />
                <div className="content">
                    <h2>Recent cases which we're working on</h2>
                    <Item.Group divided>
                        <Item>
                            <Item.Image src='/assets/beach.jpg' />
                            <Item.Content>
                                <Item.Header as='a'>The sunset boat</Item.Header>
                                <Item.Meta>
                                    <span className='cinema'>Case Id: 5a37d</span>
                                </Item.Meta>
                                <Item.Meta>
                                    <span className='cinema'>Found on: https://www.fakeurl.co.th/your_picture</span>
                                </Item.Meta>
                                <Item.Description></Item.Description>
                                <Item.Extra>
                                    <Button primary floated='right' onClick={() => this.props.history.push('/case-boat')}>
                                        More info
                                        <Icon name='right chevron' />
                                    </Button>
                                    <Label>Complete</Label>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Image src='/assets/usa003.jpg' />
                            <Item.Content>
                                <Item.Header as='a'>The grand canyon</Item.Header>
                                <Item.Meta>
                                    <span className='cinema'>Case Id: 12fd5</span>
                                </Item.Meta>
                                <Item.Meta>
                                    <span className='cinema'>Found on: https://www.fakeurl.co.th/your_picture</span>
                                </Item.Meta>
                                <Item.Description></Item.Description>
                                <Item.Extra>
                                    <Button primary floated='right' onClick={() => this.props.history.push('/case-list')}>
                                        More info
                                        <Icon name='right chevron' />
                                    </Button>
                                    <Label>Negotiating</Label>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </div>
            </div>
        )
    }
}

export default withRouter(CaseList)