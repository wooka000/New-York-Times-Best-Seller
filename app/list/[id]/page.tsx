import Link from "next/link";
import styles from "../../../styles/book.module.css";

interface IProps {
  params: { id: string };
}

async function getBooks(id: string) {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  );
  return response.json();
}

export default async function ListPage({ params: { id } }: IProps) {
  const list = await getBooks(id);
  return (
    <div className={styles.container}>
      <h1>
        {id
          .split("-")
          .map((e) => e[0].toUpperCase() + e.slice(1))
          .join(" ")}{" "}
        Books
      </h1>
      <ul>
        {list.results.books.map((book) => (
          <li key={book.rank}>
            <img src={book.book_image} alt={book.title} />
            <div className={styles.title}>{book.title}</div>
            <div className={styles.author}>{book.author}</div>
            <Link href={book.amazon_product_url}>Buy Now &rarr;</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
