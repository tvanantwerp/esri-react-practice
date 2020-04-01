import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1rem;
  padding: 1rem;
`;

const Menu = ({ bikes, setBikes, buses, setBuses, metro, setMetro }) => {
  return (
    <MenuContainer>
      <h1>Arlington Transit</h1>
      <div>
        <label htmlFor='bikes'>Bike System</label>
        <input
          name='bikes'
          id='bikes'
          type='checkbox'
          checked={bikes}
          onChange={() => setBikes(!bikes)}
        />
      </div>
      <div>
        <label htmlFor='buses'>Bus Sytem</label>
        <input
          name='buses'
          id='buses'
          type='checkbox'
          checked={buses}
          onChange={() => setBuses(!buses)}
        />
      </div>
      <div>
        <label htmlFor='metro'>Metro System</label>
        <input
          name='metro'
          id='metro'
          type='checkbox'
          checked={metro}
          onChange={() => setMetro(!metro)}
        />
      </div>
    </MenuContainer>
  );
};

export default Menu;
