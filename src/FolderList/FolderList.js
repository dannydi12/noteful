import React from 'react';
import { NavLink } from 'react-router-dom';
import './FolderList.css'

function FolderList(props) {
  const folders = props.folders.map(folder => (
    <li key={folder.id} className='folder'>
      <NavLink to={`/folder/${folder.id}`}>
        <p>{folder.name}</p>
      </NavLink>
    </li>
  ));
  return (
    <div className='folder-list'>
      <ul>
        {folders}
      </ul>
      <button>Add Folder</button>
    </div>
  );
}

FolderList.defaultProps = {
  folders: [{ id: '0', name: 'empty' }]
}

export default FolderList;