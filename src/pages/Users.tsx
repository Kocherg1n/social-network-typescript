import React, {useEffect} from 'react'
import {fetchUsers} from '../redux/middleware'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store/store'
import {UserItem} from '../components/UserItem'
import {Pagination} from '../components/Pagination'
import {setCurrentPage} from '../redux/store/reducers/usersReducer'
import Loader from '../components/Loader'
import {Redirect} from 'react-router-dom';

export const UsersPage: React.FC = () => {
    const dispatch = useDispatch()
    const {items, isLoading, currentPage, perPage, totalCount, followInProgress, userLoggedIn} = useSelector((state: RootState) => ({
        items: state.users.items,
        isLoading: state.users.isLoading,
        currentPage: state.users.currentPage,
        perPage: state.users.perPage,
        totalCount: state.users.totalCount,
        followInProgress: state.users.followInProgress,
        userLoggedIn: state.auth.userLoggedIn
    }))

    // pagination arr pages generate ...
    const pages: Array<number> = []
    const pagesCount = Math.ceil(totalCount / perPage)
    let i = 1
    while (pages.length < pagesCount) {
        pages.push(i)
        i++
    }

    const onPageClickHandler = (page: number): void => {
        dispatch(setCurrentPage(page + 1))
    }

    useEffect(() => {
        console.log('Users render')
        if (userLoggedIn)  {
            dispatch(fetchUsers())
        }
    }, [currentPage, userLoggedIn])

    const loaders = [1, 2, 3, 4, 5]

    if (!userLoggedIn) {
        return <Redirect to='login'/>
    }

    return (
        <div className='Users'>
            <ul className='Users__list'>
                {
                    isLoading
                        ? loaders.map(loader => <Loader key={loader}/>)
                        : (items.length > 0 && !isLoading) && items.map((user, idx) => (
                        <UserItem
                            key={user.id}
                            userName={user.name}
                            imageSrc={user.photos.small}
                            status={user.status}
                            followed={user.followed}
                            userId={user.id}
                            followProgress={followInProgress}
                        />
                    ))
                }
            </ul>
            <br/>
            <br/>
            <br/>
            <Pagination
                currentPage={currentPage}
                pages={pages}
                onPageClick={onPageClickHandler}
            />
        </div>
    )
}
