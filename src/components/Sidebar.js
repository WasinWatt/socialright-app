import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class DetectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: props.activeItem || 'contents'
        }
    }

    handleItemClick = (e, { name }) => {
        // this.setState({ activeItem: name })
        if (name == 'contents') {
            this.props.history.push('/my-contents')
        } else if (name == 'detects') {
            this.props.history.push('/detect-list')
        } else if (name == 'cases') {
            this.props.history.push('/case-list')
        } else {
            this.props.history.push('/history')
        } 
    }

    render() {
        return (
            <div>
                <h2>Welcome, Nut</h2>
                <Menu vertical>
                    <Menu.Item name='contents' active={this.state.activeItem === 'contents'} onClick={this.handleItemClick}>
                        <Label color={this.state.activeItem === 'contents' ? 'green' : undefined}>5</Label>
                        My contents
                    </Menu.Item>

                    <Menu.Item name='detects' active={this.state.activeItem === 'detects'} onClick={this.handleItemClick}>
                        <Label color={this.state.activeItem === 'detects' ? 'green' : undefined}>3</Label>
                        Found contents
                    </Menu.Item>

                    <Menu.Item name='cases' active={this.state.activeItem === 'cases'} onClick={this.handleItemClick}>
                        <Label color={this.state.activeItem === 'cases' ? 'green' : undefined}>1</Label>
                        Cases
                    </Menu.Item>

                    <Menu.Item name='history' active={this.state.activeItem === 'history'} onClick={this.handleItemClick}>
                        <Label color={this.state.activeItem === 'history' ? 'green' : undefined}>2</Label>
                        History
                    </Menu.Item>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search content...' />
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(DetectList)