import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Admin from "./pages/admin/Admin";
import NewsManagement from "./components/admin/NewsManagement.js";
import CreateNews from "./components/admin/CreateNews.js";
import CategoryManagement from "./components/admin/CategoryManagement.js";
import Landing from './components/layout/Landing';
import Home from "./pages/users/Home";
import Auth from "./pages/users/Auth";
import AuthContextProvider from './contexts/AuthContext';
import CategoryContextProvider from './contexts/CategoryContext';
import BigCategoryContextProvider from './contexts/BigCategoryContext';
import SeriesContextProvider from './contexts/SeriesContext';
import TypeContextProvider from './contexts/TypeContext';
import NewsContextProvider from './contexts/NewsContext';
import News from './pages/users/News';
import EditNews from "./components/admin/EditNews.js";
// import BigCategoryContextProvider from './contexts/BigCategoryContext';

function App() {
  // if (!localStorage.getItem('username')) {
  //   // console.log('case 1');
  //   if (
  //     window.location.pathname !== '/'
  //   ){
  //     window.location.href = '/';
  //     return null;
  //   }
  // }

  if(window.location.pathname === '/login' || window.location.pathname === '/register'){
      window.location.href = '/';
      return null;
  }

  return (

    <AuthContextProvider>
        <TypeContextProvider>
          <BigCategoryContextProvider>
            <CategoryContextProvider>
              <SeriesContextProvider>
                <NewsContextProvider>
                  <Router>
                    <Switch>
                      <Route path = "/admin" exact component = {Admin}/>
                      <Route path = "/admin/news" exact component = {NewsManagement}/>
                      <Route path = "/admin/news/create" exact component = {CreateNews}/>
                      <Route path = "/admin/news/create/:id" exact component = {EditNews}/>
                      <Route path = "/admin/categories" exact component = {CategoryManagement}></Route>
                      {/* <Route exact path='/' component={Landing}/> */}
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/login' render={props => <Auth {...props} authRoute='login'/>} />
                      <Route exact path='/register' render={props => <Auth {...props} authRoute='register'/>} />
                      <Route path = "/news/:id" exact component = {News}/>
                    </Switch>
                  </Router>
                </NewsContextProvider>
              </SeriesContextProvider>
            </CategoryContextProvider>
          </BigCategoryContextProvider>
        </TypeContextProvider>
    </AuthContextProvider>
  )
}

export default App;

