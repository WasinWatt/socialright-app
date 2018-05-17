import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home header">
                    {/* <img src="assets/homebackground.jpg" width="100%" /> */}
                    <div className="text">
                        <h1> Your precious works belong to you. And you only. </h1>
                        <p style={{ marginBottom: 0, paddingBottom: 0 }}>We uses our latest technologies to detect illegal copies online and notifies
					you everything you need.</p>
                        <p style={{marginTop: 0, paddingTop: 0}}>So you can continue creating amazing stuff to the world !</p>
                        <Button size="huge" color='green'>Learn more</Button>
                    </div>
                </div>
                <div className="home about">
                    <img src="assets/push-noti.png" height="400px" />
                    <h3>Get notified when ever your works were being used illegally.</h3>
                </div>
                <div className="home features">
                    <div className="usecases">
                        <div className="feature">
                            <img src="assets/magnify-icon.png" />
                            <h3>Autodetect</h3>
                            <p>Detect your works online continuously</p>
                        </div>
                        <div className="feature">
                            <img src="assets/bell-icon.png" />
                            <h3>Notify</h3>
                            <p>Notify you immediately whenever we found your precious works!</p>
                        </div>
                        <div className="feature">
                            <img src="assets/spy-icon.png" />
                            <h3>Pursue</h3>
                            <p>We will do the hard process for you</p>
                        </div>
                    </div>
                    <Button color="green" size="huge" onClick={()=> this.props.history.push('/my-contents')}>Try it for free!</Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Home)
