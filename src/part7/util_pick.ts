{
    interface Book {
        isbn: string;
        title: string;
        price: number;
        published: Date;
    }

    type SubBook = Pick<Book, 'title' | 'price'>
}