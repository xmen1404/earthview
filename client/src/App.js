import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Admin from "./views/admin/Admin";
import NewsManagement from "./components/admin/NewsManagement.js";
import CreateNews from "./components/admin/CreateNews.js";
import CategoryManagement from "./components/admin/CategoryManagement.js";
import Landing from './components/layout/Landing';
import Home from "./views/users/Home";
import Auth from "./views/users/Auth";
import AuthContextProvider from './contexts/AuthContext';
import CategoryContextProvider from './contexts/CategoryContext';
import NewsContextProvider from './contexts/NewsContext';
import News from './views/users/News';

function App() {
  return (

    <AuthContextProvider>
        <CategoryContextProvider>
          <NewsContextProvider>
            <Router>
              <Switch>
                <Route path = "/admin" exact component = {Admin}/>
                <Route path = "/admin/news" exact component = {NewsManagement}/>
                <Route path = "/admin/news/create" exact component = {CreateNews}/>
                <Route path = "/admin/categories" exact component = {CategoryManagement}></Route>
                {/* <Route exact path='/' component={Landing}/> */}
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' render={props => <Auth {...props} authRoute='login'/>} />
                <Route exact path='/register' render={props => <Auth {...props} authRoute='register'/>} />
                <Route path = "/news/:id" exact component = {News}/>
              </Switch>
            </Router>
          </NewsContextProvider>
        </CategoryContextProvider>
    </AuthContextProvider>
  )
}

export default App;

