import Link from 'next/link';

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Startsida</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>Om oss</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Kontakt</a>
          </Link>
        </li>
        <li>
          <Link href='/order'>
            <a>Beställa</a>
          </Link>
        </li>
        <li>
          <Link href='/fika'>
            <a>Fika</a>
          </Link>
        </li>
        <li>
          <Link href='/events'>
            <a>Händer på gundla</a>
          </Link>
        </li>
        <li>
          <Link href='/event'>
            <a>Eventinvidkalender</a>
          </Link>
        </li>
        <li>
          <Link href='/visit-us'>
            <a>Besök oss</a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          ul {
            list-style: none;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
