import './App.css';
import Articles from './components/Articles';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigateTopic from './components/NavigateTopic';
import Topics from './components/Topics';
import ArticlePage from './components/ArticlePage';
import { UserContext } from './Context/userContext';


function App() {
  return (
    <UserContext.Provider value={{ username: "grumpy19" }}>
      <BrowserRouter> 
        <div className="App">
          <Header />
          <NavigateTopic/>
          <Routes>
              <Route path = "/" element = {< Articles />} />
              <Route path = "/topics/:topic" element = {<Topics />} />
              <Route path = "/articles/:article_id" element = {< ArticlePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
