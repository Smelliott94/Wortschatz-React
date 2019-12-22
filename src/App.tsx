import React from 'react';
import { Menu } from 'semantic-ui-react';
import './App.css';
import TopWords from './lessonComponents/TopWords'

const App: React.FC = () => {
  return (
      <div id='main'>\

        <div style={{paddingBottom: '10mm'}}>
          <Menu fixed="top" inverted>
            <Menu.Item header>Wortschatz</Menu.Item>
          </Menu>
        </div>
        
        <TopWords />
      </div>
  );
}

export default App;
