import React from 'react';
import Bot from './Bot';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bots">
        {army.map((bot) => (
          <Bot key={bot.id} bot={bot} releaseBot={releaseBot} dischargeBot={dischargeBot} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
