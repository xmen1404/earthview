import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Admin from "./components/admin/Admin.js";
import NewsManagement from "./components/admin/NewsManagement.js";
import CreateNews from "./components/admin/CreateNews.js";



function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/admin" exact component = {Admin}/>
        <Route path = "/admin/news" exact component = {NewsManagement}/>
        <Route path = "/admin/news/create" exact component = {CreateNews}/>
      </Switch>
    </Router>
  );
}

export default App;
