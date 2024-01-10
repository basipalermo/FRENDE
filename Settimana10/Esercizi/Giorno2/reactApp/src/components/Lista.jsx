import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import ListButtons from './ListButtons';
import SingleBook from './SingleBook';

const Lista = () => {
    const [list, setList] = useState([]);

    return (
        <>
            <ListButtons setList={setList} />

            <div className="d-flex justify-content-between flex-wrap">
            {list.map((book) => 
               <SingleBook book = {book} key = {book.asin} />               
            )}
            </div>
        </>
    )
};

export default Lista;