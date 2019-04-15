import React, { Component } from "react";
import { render } from "react-dom";
import NavHeader from "./components/NavHeader";
import { Router, Route, Switch } from "react-router";
import { HashRouter } from 'react-router-dom'
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Search from "./screens/Search";
import About from "./screens/About";
import styled from 'styled-components';

import { createGlobalStyle } from "styled-components";
import theme from "./theme";

import { Box, Grommet } from "grommet";

const GlobalStyle = createGlobalStyle`
  body {
    
  }
  .pagination-container {
    display: flex;
    list-style-type: none;
    justify-content:space-evenly;
    background-color: white;
    padding:.5rem;
  }
  .li-elem {
  }
  .a-elem {
      padding:.5rem;
      

  }
  .active-page {
    border: #101010 1px solid;
     
  }
  .active-a {

  }
  .previous-btn{
      
  }
  .next-btn{
 
  }
  .pre{
    padding:.5rem;
  }
  .nex{
      padding:.5rem;

  }
  .selected-menu-item div {
      box-shadow: inset 0 -4px 0 0 red;
  }

   
`;



class App extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <GlobalStyle /> 
                <Grommet theme={theme} full>
                    <Box direction="column" height="100vh" background="light-2" >
                        <ZBox basis="auto" flex="false" >
                            <NavHeader />
                        </ZBox>
                        <Box basis="auto" flex="true" >
                            
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/contact' component={Contact} />
                                <Route exact path='/search' component={Search} />
                                <Route exact path='/about' component={About} />
                            </Switch>
                        </Box >
                        <Box basis="auto" flex="false"/>
                    </Box>
                </Grommet>
            </HashRouter>
        );
    }
}

export default App;


let SiteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;

let SiteHeader = styled.div`
    flex: 0 0 auto;
`;

let SiteContent = styled.div`
    flex: 1 0 auto;
    width: 100%;
`;

let SiteFooter = styled.div `
    flex: 0 0 auto;
`;
let ZBox = styled(Box)`
    z-index: 999;
`;

