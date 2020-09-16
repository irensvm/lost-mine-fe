import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

export default function OpenMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/" className="nav-link">
            {" "}
            Home{" "}
          </NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/mybooks" className="nav-link">
            Books
          </NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          {" "}
          <NavLink to="/logout" className="nav-link">
            {" "}
            Logout{" "}
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
