import React, { useState, useEffect } from 'react';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/victorbiikipkoech/Bot-Battlr/bots/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      <ul>
        {bots.map(bot => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} /> 
            {bot.name} - <button onClick={() => enlistBot(bot)}>Enlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;
