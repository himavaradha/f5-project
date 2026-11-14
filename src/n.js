import { Link } from "react-router-dom";
import "./n.css"
const N = () => {
  return (
    <div className="r">
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/summary">Summary</Link>
    </div>
  );
};

export default N
