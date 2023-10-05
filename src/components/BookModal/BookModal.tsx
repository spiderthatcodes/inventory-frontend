/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from 'axios'
import { FC } from 'react'

const BookModal: FC<any> = ({ book }) => {

    // const saveBook = () => {
    //     axios.post()
    // }

  return (
    <div>
        <h1>{book.title}</h1>
        {/* <h2>{book.author}</h2> */}
    </div>
  )
}

export default BookModal
