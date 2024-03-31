import Link from "next/link";
import styles from "../../styles/home.module.css";

async function getBestSellers() {
  const response = await fetch(
    " https://books-api.nomadcoders.workers.dev/lists"
  );
  const data = response.json();
  return data;
}

export default async function Page() {
  const data = await getBestSellers();
  return (
    <div className={styles.container}>
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <ul>
        {data.results.map((e) => (
          <li key={e.list_name}>
            <Link href={`/list/${e.list_name_encoded}`}>{e.display_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
