import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import DetectList from './pages/DetectList'
import DetectContent from './pages/DetectContent'
import Upload from './pages/Upload'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import logo from './logo.svg'

const history = createBrowserHistory()
class App extends Component {
  render() {
    return (
		<Router history={history}>
			<div className="App">
				<Navbar/>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/my-contents" component={Upload} />
						<Route path="/detect-list" component={DetectList} />
						<Route path="/the-sunset-boat" component={DetectContent} />
						<Route path="" render={() => {
							return (
								<div>
									<h1> Error 404: page not found </h1>
								</div>
							)
						}} />
					</Switch>
				</div>
				<Footer/>
			</div>
		</Router>
    );
  }
}

export default App;
