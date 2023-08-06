import { FC } from 'react';
import { useBooks } from '@/hooks/useBooks';
import styles from './BookTable.module.css'

export const BookTable: FC = () => {
    const { isLoading, books} = useBooks();
    if (isLoading) return <p>Loading...</p>

    return(
        <div className={styles.main}>
            <ul>
                {books.map((book)=>(
                    <li key={book.id} className={styles.text}>
                        {book.title} / {book.author} / {book.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}