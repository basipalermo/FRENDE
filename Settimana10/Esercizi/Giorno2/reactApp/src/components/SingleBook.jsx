import { Card, Button } from 'react-bootstrap';

const SingleBook = ({book}) => {
    return (
        <Card style={{ width: '18rem' }} key={book.asin}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
            {book.asin + ' - ' + book.price}
            </Card.Text>
            <Button variant="danger">Acquista</Button>
        </Card.Body>
    </Card>
    )
}

export default SingleBook;
