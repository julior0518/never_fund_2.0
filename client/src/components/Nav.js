import LogInOut from './LogInOut';
import { Link } from 'react-router-dom';

function Nav(props) {
  let navElements;
  if (!props.userStatus.loginStatus) {
    navElements = (
      <Link to="/" className="li">
        Home
      </Link>
    );
  } else {
    navElements = (
      <div className="liDiv">
        <Link to="/" className="li">
          Home
        </Link>
        <Link to="/explore" className="li">
          Explore
        </Link>
        <Link to="/profile" className="li">
          Profile
        </Link>
        <Link to="/ballot" className="li">
          Add
        </Link>
      </div>
    );
  }

  return (
    <div className="Nav">
      {navElements}
      <LogInOut props={props} />
    </div>
  );
}

export default Nav;
