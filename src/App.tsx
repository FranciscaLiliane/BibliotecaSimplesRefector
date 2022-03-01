import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import Result from './components/results';
import Search from './components/search';

function App() {
  const [resposta, setResponse] = useState([]);
 
  return (
    <Box>
      <Search setResponse={setResponse}/>
      {        
        resposta.map((item, index) => (
          <Result key={index} item={item} />
        ))
      }
    </Box>
  );
}
export default App;
