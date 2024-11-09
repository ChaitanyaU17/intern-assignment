import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
    <div className='bg-black px-5 py-2'>
    <Link href="/">
          <Image src="/logo.png" alt="logo" width={60} height={60} priority />
        </Link>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white ">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Frontend Assignment</h1>
      <p className="text-lg mb-6">Please sign up or log in to access posts.</p>
      
      <div className="space-x-4">
        <Link href="/signup" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Sign Up
        </Link>
        <Link href="/login" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Login
        </Link>
      </div>
    </div>
    </>
    
  );
}
