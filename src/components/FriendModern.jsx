import React from 'react';
import PT from 'prop-types';

const dbCallback = Function.prototype;

const style = {
  border: '1px solid black',
  padding: '10px',
  margin: '10px',
};

// fetch online status from the server (fake lol)
export function checkOnlineStatus(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(id % 2 === 0);
    }, 1000);
  });
}

export default function FriendModern({ friend }) {
  const isOnline = false;

  return (
    <div style={style}>
      <h3>{friend.name}</h3>

      <div style={{ color: isOnline ? 'green' : 'red' }}>
        is {!isOnline && 'NOT '}online
        {isOnline && ' :)'}
      </div>

      <span>(functional component with hooks)</span>
    </div>
  );
}

FriendModern.propTypes = {
  friend: PT.shape({
    id: PT.number.isRequired,
    name: PT.string.isRequired,
  }).isRequired,
};
