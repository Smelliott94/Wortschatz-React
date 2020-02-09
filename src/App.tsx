import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import './App.css';
import TopWords from './lessonComponents/TopWords';
import  Flashcards from "./lessonComponents/Flashcards";

export const API_ROOT = "https://wortschatz-me.herokuapp.com/"

const App: React.FC = () => {
  return (
      <div id='main'>

        <div style={{paddingBottom: '10mm'}}>
          <Menu fixed="top" inverted>
            <Menu.Item header>Wortschatz</Menu.Item>
          </Menu>
        </div>
        <Flashcards />
        <div>
          <TopWords />
        </div>
      </div>
  );
}

export default App;
