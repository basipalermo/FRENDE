import Button from 'react-bootstrap/Button'
import FantasyBooks from '../../books/fantasy.json';
import HistoryBooks from '../../books/history.json';
import HorrorBooks from '../../books/horror.json';
import RomanceBooks from '../../books/romance.json';
import SciFiBooks from '../../books/scifi.json';

const ListButtons = ({setList}) => {

    const categories = [
        {
            nome: 'Fantasy',
            data: FantasyBooks
        },
        {
            nome: 'History',
            data: HistoryBooks
        },
        {
            nome: 'Horror',
            data: HorrorBooks
        },
        {
            nome: 'Romance',
            data: RomanceBooks
        },
        {
            nome: 'SciFi',
            data: SciFiBooks
        }
    ]


    return (
        <div className="text-center py-4">
            {categories.map((category, index) => 
                <Button variant="outline-dark" className="mx-3" onClick={() => setList(category.data)} key={index}>{category.nome}</Button>
            )}
        </div>
    )
}

export default ListButtons