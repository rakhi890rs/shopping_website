import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asynclogoutuser } from '../store/action/userAction';
import { loadUser } from '../store/reducers/userSlice';

const Nav = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(asynclogoutuser());
    dispatch(loadUser(null));
  };

  return (
    <nav className="flex justify-center items-center gap-x-5 p-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>

      {!user && <NavLink to="/login">Login</NavLink>}

      {user?.id && (
        <>
          <NavLink to="/admin/create-product">Create Product</NavLink>
          <NavLink to="/admin/user-profile">Settings</NavLink>
          {/* <span className="ml-3">{user.username}</span> */}
          {/* <button
            onClick={handleLogout}
            className="ml-3 px-2 bg-red-400 rounded"
          >
            Logout
          </button> */}
        </>
      )}
    </nav>
  );
};

export default Nav;
