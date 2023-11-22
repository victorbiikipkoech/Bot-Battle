import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/victorbiikipkoech/Bot-Battlr/db')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to the console
        setBots(data.bots);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  const enlistBot = (bot) => {
    // Add the bot to yourBotArmy if not enlisted already
    if (!yourBotArmy.some((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    // Remove the bot from yourBotArmy
    const updatedArmy = yourBotArmy.filter((b) => b.id !== bot.id);
    setYourBotArmy(updatedArmy);
  };

  const dischargeBot = (bot) => {
    
    const updatedBots = bots.filter((b) => b.id !== bot.id);
    setBots(updatedBots);

    const updatedArmy = yourBotArmy.filter((b) => b.id !== bot.id);
    setYourBotArmy(updatedArmy);

    // Make a DELETE request to remove the bot from the backend
    fetch(`https://my-json-server.typicode.com/victorbiikipkoech/Bot-Battlr/bots/${bot.id}`, {
      method: 'DELETE',
    });
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy army={yourBotArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
}

export default App;

