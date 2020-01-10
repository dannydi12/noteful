import React from 'react';
import { NavLink } from 'react-router-dom';
import './FolderList.css';
import PropTypes from 'prop-types';

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
      <button onClick={() => props.history.push('/add-folder')}>Add Folder</button>
    </div>
  );
}

FolderList.defaultProps = {
  folders: [{ id: '0', name: 'empty' }]
}

FolderList.propTypes = {
  folders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired 
};

export default FolderList;