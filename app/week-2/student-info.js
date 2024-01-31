import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name: <strong>Seungkwon Choi</strong></p>
      <p>GitHub Repository:</p>
      <Link href="https://github.com/SeungkwonChoi/cprg306-assignments">
        <p className='hover:text-green-400 underline'>SeungkwonChoi/cprg306-assignments</p>
      </Link>
    </div>
  );
}



