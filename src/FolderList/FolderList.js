import React from 'react';
import { NavLink } from 'react-router-dom';

function FolderList(props) {
  const folders = props.folders.map(folder => (
    <li key={folder.id}>
      <NavLink to={`/folder/${folder.id}`}>
        <p>{folder.name}</p>
      </NavLink>
    </li>
  ));
  return (
    <>
      <ul>
        {folders}
      </ul>
      <button>Add Folder</button>
    </>
  );
}

FolderList.defaultProps = {
  folders: [{ id: '0', name: 'empty' }]
}

export default FolderList;