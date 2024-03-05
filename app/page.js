import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <h1 className='text-5xl font-bold mb-5'>CPRG 306: Web Development 2 - Assignments</h1>
      <div className="text-lg space-y-2">
        <Link href="/week-2">
          <p className='cursor-pointer hover:text-green-400 underline'>Week 2 Assignment</p>
        </Link>
        <Link href="/week-3">
          <p className='cursor-pointer hover:text-green-400 underline'>Week 3 Assignment</p>
        </Link>
        <Link href="/week-4">
          <p className='cursor-pointer hover:text-green-400 underline'>Week 4 Assignment</p>
        </Link>
        <Link href="/week-5">
          <p className='cursor-pointer hover:text-green-400 underline'>Week 5 Assignment</p>
        </Link>
        <Link href="/week-6">
          <p className='cursor-pointer hover:text-green-400 underline'>Week 6 Assignment</p>
        </Link>
        <Link href="/week-7">
          <p className='cursor-pointer hover:text-green-400 underline'>Week 7 Assignment</p>
        </Link>
        <Link href="/week-8">
          <p className='cursor-pointer hover:text-green-400 underline'>Week 8 Assignment</p>
        </Link>
      </div>
    </main>
  );
}
