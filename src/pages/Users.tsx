import React, {useEffect} from 'react'
import {fetchUsers} from '../redux/middleware'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store/store'
import {UserItem} from '../components/UserItem'
import {Pagination} from '../components/Pagination'
import { setCurrentPage } from '../redux/store/reducers/usersReducer'

export const Users: React.FC = () => {
    const dispatch = useDispatch()
    const {items, isLoading, currentPage, perPage, totalCount} = useSelector((state: RootState) => ({
        items: state.users.items,
        isLoading: state.users.isLoading,
        currentPage: state.users.currentPage,
        perPage: state.users.perPage,
        totalCount: state.users.totalCount
    }))

    // pagination arr pages generate ..
    const pages: any = []
    const pagesCount = Math.ceil(totalCount/perPage)
    let i = 1
    while (pages.length < pagesCount) {
        pages.push(i)
        i++
    }

    const onPageClickHandler = (page: number): void => {
        dispatch(setCurrentPage(page + 1))
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch, currentPage])

    return (
        <div className='Users'>
            <ul className='Users__list'>
                {
                    !isLoading && items.length && (
                        items.map((user, idx) => (
                            <UserItem
                                key={user.id}
                                userName={user.name}
                                imageSrc={user.photos.small}
                                status={user.status}
                                followed={user.followed}
                                userId={user.id}
                            />
                        ))
                    )
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
};
