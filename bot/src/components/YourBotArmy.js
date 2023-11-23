import React from 'react';

const YourBotArmy = ({ enlistedBots, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {enlistedBots.map(bot => (
          <li key={bot.id}>
            {bot.name} - 
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;

