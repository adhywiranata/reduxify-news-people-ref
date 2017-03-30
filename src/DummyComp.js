import React from 'react';
import { Link } from 'react-router-dom'

const DummyComp = (props) => {
    return (
      <div>
        <ul>
          <li><Link to="/ShowList">ShowList</Link></li>
          <li><Link to="/Peoples">Peoples</Link></li>
        </ul>
      </div>
    )
}

export default DummyComp
