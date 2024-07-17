import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Hello from Home Page</h1>
      <Link to='/shop'>Go Shopping Now !</Link>
    </>
  );
};
export default HomePage;
