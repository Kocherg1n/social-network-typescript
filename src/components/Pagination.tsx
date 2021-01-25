import React from 'react'
import './Pagination.css'
import classNames from 'classnames'

type PaginationType = {
    pages: Array<number>,
    currentPage: number,
    onPageClick: (page: number) => void
}

export const Pagination: React.FC<PaginationType> = ({pages, currentPage, onPageClick}) => {

    return (
        <ul className='Pagination'>
            {
                pages.map((page, idx) =>
                    <li key={idx}
                        onClick={() => onPageClick(idx)}
                        className={classNames('Pagination__item', {
                            'active': page === currentPage
                        })}
                    >{page}</li>)
            }
        </ul>
    )
}
