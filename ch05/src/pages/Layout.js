import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';        // 교체되는 영역만 Outlet으로 지정 (Router에서 어디어디라고 지정해주어야 함)

const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1); };
    const goHome = () => { navigate('/', { replace : true }); };
    const goArticles = () => { navigate('/articles', { replace : true }); }
    return (
        <div>
            <header style={{ background:'#ececec', padding:20, fontSize:24 }}>
                <button onClick={goBack}>뒤로 가기</button>
                <button onClick={goHome}>홈으로</button>
                <ul style={{ float:'right' }}>
                    <li><Link to='/articles'> 게시판 </Link></li>
                    <li><Link to='/login'> 로그인 </Link></li>
                    <li><Link to='/join'> 회원가입 </Link></li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout