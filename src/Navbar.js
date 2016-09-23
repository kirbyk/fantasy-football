import React from 'react';
import { Link } from 'react-router';
import {
  Heading,
  NavItem,
  Select,
  Space,
  Toolbar,
} from 'rebass';

import weeks from './weeks';


const Navbar = ({
  currentWeek,
  switchWeek,
}) => (
  <Toolbar>
    <Heading level={2}>Fantasy Football</Heading>

    <Space x={2} />

    <NavItem is={Link} to='/teams'>Teams</NavItem>
    <NavItem is={Link} to='/players'>Players</NavItem>

    <Space auto x={1} />

    <Select
      name="select_example"
      onChange={switchWeek}
      options={weeks}
      value={currentWeek}
    />
  </Toolbar>
);

export default Navbar;
