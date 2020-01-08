import React from 'react';

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  delete: () => {},
  addFolder: () => {},
  addNote: () => {}
});

export default NotefulContext;