import React from 'react';
import './EmojiApp.css';

function EmojiTable({ emojiData }) {
  // console.log(emojiData.length);
  if (emojiData.length)
  {
    return (
      <table>
          <tr>
            <th>Name of Emoji</th>
            <th>Character Image</th>
            <th>Unicode</th>
          </tr>
  
          {emojiData.map((result, index) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>
                <img src={result.image} alt={result.name} className="emoji-image" />
              </td>
              <td>{result.code}</td>
            </tr>
          ))}
      </table>
    );
  }
  
}

export default EmojiTable;
