import React from 'react';

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  delete: () => {}
});

export default NotefulContext;