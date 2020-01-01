import React from 'react';
import FolderList from '../FolderList/FolderList'
import { Route, Link } from 'react-router-dom';


function Sidebar(props) {
  return(
    <aside>
      <Route path='/' render={() => <FolderList folders={props.folders} />} />
      {/* Add route to display go back button only when seeing note */}
    </aside>
  );
}

export default Sidebar;