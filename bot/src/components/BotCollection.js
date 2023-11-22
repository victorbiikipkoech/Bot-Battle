import React from 'react';
import Bot from './Bot';

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bots">
        {bots.map((bot) => (
          <Bot key={bot.id} bot={bot} enlistBot={() => enlistBot(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
