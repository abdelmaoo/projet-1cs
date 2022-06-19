
import './navbar.css';
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity)

  return (
    <div className='navbarContainer'>
      <div className='navbarContainer1'>
        <div className='navbarContainer1Shape'>
        <select>
          <option>
            En
          </option>
          <option>
            Fr
          </option>
          <option>
            Ar
          </option>
        </select>
        <div className='navbarContainer1Input'>

          <input className='inputStyle' placeholder='search' />
          <Search className='searchIcon' fontSize="small" />

        </div>
        </div>
       
      </div>
      <div className='navbarContainer2'>
        lama.
      </div>
      <div className='navbarContainer3'>
        <div className='navbarContainer3Shape'>
        <div>
  Register
</div>
<div>
  Sign In
</div>
<Link to='/cart'>
<Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>

</Link>

      </div>
        </div>


    </div>
  );
}

export default Navbar;
