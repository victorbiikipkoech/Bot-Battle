import React from 'react';

function Bot({ bot, enlistBot, releaseBot, dischargeBot }) {
  const handleEnlist = () => enlistBot(bot);
  const handleRelease = () => releaseBot(bot);
  const handleDischarge = () => dischargeBot(bot);

  return (
    <div className="bot">
      <h3>{bot.name}</h3>
      <p>{bot.description}</p>
      <button onClick={handleEnlist} alt="Enlist Bot">
        Enlist
      </button>
      <button onClick={handleRelease} alt="Release Bot">
        Release
      </button>
      <button className="red" onClick={handleDischarge} alt="Discharge Bot">
        X
      </button>
    </div>
  );
}

export default Bot;

