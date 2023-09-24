// Router(react-router-dom) : BrowserRouter 라고도 하며, 웹 애플리케이션의 경로 및 파라미터, 구조 등을 연결될 수 이쏘돍 하는 훅(hook)의 모음체
// Router > Routes > Route
import React, { BrowserRouter as Router, Route, Routes} from 'react-router-dom';      // 페이지를 이동하기 위해 react-router-dom 사용
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Layout from './pages/Layout';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
