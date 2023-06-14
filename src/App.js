import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import Cardstyleproj from './components/commons';
import ArticleList from './components/commons/blogIndex.jsx';
import NavBar from './components/commons/NavBar';


function App() {
  return (
    <ChakraProvider theme={theme}>

      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
         
          <NavBar/>

          <ArticleList/>
          <Cardstyleproj/>
    

        </Grid>
      </Box>
    </ChakraProvider>

    
  );
}

export default App;
