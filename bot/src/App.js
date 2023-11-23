import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes

import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    
    if (!enlistedBots.find(b => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
  
    const updatedBots = enlistedBots.filter(b => b.id !== bot.id);
    setEnlistedBots(updatedBots);
  };

  const dischargeBot = (bot) => {
    console.log(`Bot Discharged: ${bot.name}`);
    const updatedBots = enlistedBots.filter(b => b.id !== bot.id);
    setEnlistedBots(updatedBots);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Bot Collection</Link>
            </li>
            <li>
              <Link to="/your-bot-army">Your Bot Army</Link>
            </li>
          </ul>
        </nav>

      
        <Routes>
          <Route path="/" element={<BotCollection enlistBot={enlistBot} />} />
          <Route
            path="/your-bot-army"
            element={<YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

