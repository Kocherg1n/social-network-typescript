import React, {useEffect} from 'react'
import {Header} from './components/Header'
import {Layout} from './components/Layout'
import {Navigation} from './components/Navigation'
import {Routes} from './routes/routes'
import {fetchAuthData} from './redux/middleware'
import {RootState} from './redux/store/store'
import {useDispatch, useSelector} from 'react-redux'


export const App: React.FC = () => {
    const dispatch = useDispatch();
    const {userLoggedIn, userData} = useSelector((state: RootState) => ({
        userLoggedIn: state.auth.userLoggedIn,
        userData: state.auth.userData,
    }))

    useEffect(() => {
        dispatch(fetchAuthData())
    }, [dispatch])

    return (
        <div className='App'>
            <Layout>
                <Header loggedIn={userLoggedIn} userLogin={userData.login}/>
                <aside className='Aside'>
                    <Navigation/>
                </aside>
                <main className='Main'>
                    <Routes />
                </main>
                <footer className='Footer'>footer</footer>
            </Layout>
        </div>
    )
}



