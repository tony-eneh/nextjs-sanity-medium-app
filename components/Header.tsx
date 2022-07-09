import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const handleFollow = () => {
    console.log('tried to follow');
  };

  return (
    <header className="flex justify-between p-5">
      <div className="flex space-x-5">
        <Link href="/">
          <img
            src="https://cdn.cdnlogo.com/logos/m/1/medium.svg"
            alt="site logo"
            className="w-44 object-contain cursor-pointer"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-5">
          <h3>
            <Link href="/about">About</Link>
          </h3>
          <h3>
            <Link href="/contact">Contact</Link>
          </h3>
          <h3>
            <button
              className="bg-green-600 rounded-full border-0 text-white py-1 px-3"
              onClick={handleFollow}
            >
              Follow
            </button>
          </h3>
        </nav>
      </div>
      <div className="flex items-center space-x-5">
        <h3 className="text-green-600">
          <Link href="/login">Sign in</Link>
        </h3>
        <h3 className="text-green-600 rounded-full border border-green-600  py-1 px-3">
          <Link href="/signup">Get Started</Link>
        </h3>
      </div>
    </header>
  );
};

export default Header;
