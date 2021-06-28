import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Admin from "./components/admin/Admin.js";
import NewsManagement from "./components/admin/NewsManagement.js";
import CreateNews from "./components/admin/CreateNews.js";
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
function App() {
  return (

    <AuthContextProvider>
        <Router>
          <Switch>
            <Route path = "/admin" exact component = {Admin}/>
            <Route path = "/admin/news" exact component = {NewsManagement}/>
            <Route path = "/admin/news/create" exact component = {CreateNews}/>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/login' render={props => <Auth {...props} authRoute='login'/>} />
            <Route exact path='/register' render={props => <Auth {...props} authRoute='register'/>} />
          </Switch>
        </Router>
    </AuthContextProvider>
  )
}

export default App;

