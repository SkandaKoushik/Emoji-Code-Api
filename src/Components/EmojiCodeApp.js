import React, { useState } from 'react';
import EmojiTable from './EmojiTable';
import './EmojiApp.css';

function EmojiCodeApp() {
  const [emoji, setEmoji] = useState('');
  const [emojiData, setEmojiData] = useState([]);

  const apiLink = "https://api.api-ninjas.com/v1/emoji?name=";

  const getEmoji = async () => {
    try {
      const emojiData = await fetch(`${apiLink}${emoji}`, {
        method: "GET",
        headers: { "X-Api-Key": "NYwFynNwR+VCSQ4Fq+Qq5w==YbCQtMaPjMxLjzls" },
      });

      const response = await emojiData.json();
      setEmojiData(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="main">
      <div id="query-content">
        <div id="form-div">
          <input
            type="text"
            value={emoji}
            placeholder="Enter Emoji Name"
            id="input-emoji"
            onChange={(e) => setEmoji(e.target.value)}
          />

          <button id="submit-emoji" onClick={getEmoji}>
            Submit the Emoji
          </button>
        </div>
      </div>
      <div id="data-content">
        {/* Render emoji data as a table */}
        <EmojiTable emojiData={emojiData} />
      </div>
    
    </div>
  );
}

export default EmojiCodeApp;
