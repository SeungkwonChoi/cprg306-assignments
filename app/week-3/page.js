import ItemList from "./item-list";
import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold m-6 text-center">
        Shopping List
      </h1>
      <ItemList />
      <Link href="/" className="font-bold">Assignment List</Link>
    </main>
  );
}
