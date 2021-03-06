/**
 * Created by hgyu on 16/3/5.
 */
import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import auth from './middleware/auth';
import Articles from './components/article/Articles';
import Article from './components/article/Article';
import CreateArticle from './components/article/CreateArticle';
import EditArticle from './components/article/EditArticle';
import User from './components/User';
import Register from './components/Register';
import Login from './components/Login';
import App from './components/App';
import Home from './components/Home';
import Logout from './components/Logout';
import './app/main.less';


export default (
	<Router history={browserHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Home}/>
			<Route path="/article" component={Articles}/>
			<Route path="/article/:id" component={Article}/>
			<Route path="/create/article" component={CreateArticle}/>
			<Route path="/edit/article/:id" component={EditArticle}/>
			<Route path="/user/:id" component={User}/>
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
			<Route path="/logout" component={Logout}/>
		</Route>
	</Router>
);

//<Route path="/user" component={UserList}/>
//<Route path="/edit/user/:id" component={EditUser}/>