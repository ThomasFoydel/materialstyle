import React, { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';

import './App.css';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className='App'>
      <Navbar props={{ setShowSidebar }} />
      <Sidebar props={{ showSidebar, setShowSidebar }} />
    </div>
  );
}

export default App;
