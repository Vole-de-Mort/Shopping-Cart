import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <>
      <p>404 - URL not Found</p>
      <p>
        {' '}
        <b>Oops !</b> Something went wrong{' '}
      </p>
      <p>
        <Link to='/'>Back to your home sweet home</Link>
      </p>
    </>
  );
}
