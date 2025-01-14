import React, { Component } from 'react';
import dishes from '../dishes.json';
import MenuItem from './MenuItem';

class Menu extends Component {
  render() {
    return (
      <div className="dishes">
        <MenuItem dish = {dishes[0]}/>
        <MenuItem dish = {dishes[1]}/>
        <MenuItem dish = {dishes[2]}/>
        <MenuItem dish = {dishes[3]}/>
        <MenuItem dish = {dishes[4]}/>
        <MenuItem dish = {dishes[5]}/>
        <MenuItem dish = {dishes[6]}/>
        <MenuItem dish = {dishes[7]}/>
        <MenuItem dish = {dishes[8]}/>
        <MenuItem dish = {dishes[9]}/>
        <MenuItem dish = {dishes[10]}/>
        <MenuItem dish = {dishes[11]}/>
      </div>
    );
  }
}

export default Menu;