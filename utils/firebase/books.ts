import { collection, getDocs, getFirestore} from 'firebase/firestore';

export type Book = {
    id: string
    name: string
    author: string
}

export async function getBooks(): Promise<Book[]>{
    const books = new Array<Book>();
    const db = getFirestore();
    const booksSnapshot = await getDocs(collection(db,'/books'))

    booksSnapshot.forEach((doc) => {
        const book = doc.data() as Book;
        books.push({...book,id: doc.id});
    })

    books.reverse(); //新しいものを先頭にもっていく
    return books;
}