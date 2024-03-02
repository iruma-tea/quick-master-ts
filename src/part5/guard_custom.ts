import { title } from "process";

{
    interface Book {
        isbn: string;
        title: string;
    }

    interface Magazine {
        mcode: string;
        title: string;
    }

    function getInfo(): Book | Magazine {
        return {
            isbn: '',
            title: ''
        }
    }

    function isBook(inf: Book | Magazine): inf is Book {
        return (inf as Book).isbn != undefined;
    }

    let i = getInfo();
    if (isBook(i)) {
        console.log(i.isbn);
    } else {
        console.log(i.mcode);
    }

}