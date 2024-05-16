import { IconButton,  Popover, MenuItem } from '@mui/material';
import { useState} from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import {signOut} from "firebase/auth";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../Utils/firebase";
import { useDispatch } from "react-redux";
import {addUser} from "../Utils/userSlice";
import { removeUser} from "../Utils/userSlice";

const Header=()=>{
  const user=useSelector(store=>store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth ,(user)=>{
       if(user){
           const{uid,email,displayName}=user;
           dispatch(addUser({uid:uid,email:email,displayName:displayName}));
           navigate("/browse");
       }
       else{
           dispatch(removeUser());
           navigate("/");
       }
    });
    return()=>unsubscribe();
   },[]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }
  const handleMenuItemClick = (item) => {
    // Handle the click on a menu item
    // console.log(`Clicked on: ${item}`);
    handleClose(); // Close the menu
  };
  return (
    <div className="absolute px-10 bg-gradient-to-b from-black z-10 flex w-screen overflow-hidden">
    <div className="w-2/12 mr-8 flex items-center">
      <img src="logo.png" className="h-40" alt="logo" />
    </div>
  {user &&<div className="flex w-full justify-between items-center">
      <ul className="flex w-6/12 justify-between text-white">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Recently Added</li>
        <li>My List</li>
      </ul>
  
      <div className="w-1/5 flex mr-20 justify-end">
        <img src="avatar.jpg" className="w-10" alt="avatar" />
       
        <IconButton
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <ArrowDropDownIcon style={{color:'white'}} />
      </IconButton>
      <Popover
        id="dropdown-menu"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
          marginbottom: '20px'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div>
          <MenuItem onClick={() => handleMenuItemClick('Option 1')}>Accounts</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Option 2')}>Help</MenuItem>
          <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
        </div>
      </Popover>
      </div>
    </div>
  }
  </div>  
   )
}
export default Header;
