import { FC } from 'react';
import { useBooks } from '@/hooks/useBooks';
import styles from './BookTable.module.css'

export const BookTable: FC = () => {
    const { isLoading, books} = useBooks();
    if (isLoading) return <p>Loading...</p>

    return(
        <div>
            <ul>
                {books.map((book)=>(
                    <li key={book.id} className={styles.main}>
                        {book.name} | {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}