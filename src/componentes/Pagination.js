import React from 'react'

const Pagination = ({next, prev, onPrevious, onNext}) => {

    const handlePrevious =(e) => {
        onPrevious()
    }
    const handleNext =(e) => {
        onNext()
    }
    return (
        <nav >
            <ul className="pagination">
                {
                    prev ? 
                 <li className="page-item">
                    <button onClick={handlePrevious}>Previus</button>
                </li>
                :
                null
                }
                {
                    next ?
                    <li className="page-item">
                    <button onClick={handleNext}>Next</button>
                    </li>
                    :
                    null
                }
               
               
            </ul>
        </nav>
    )
}

export default Pagination
