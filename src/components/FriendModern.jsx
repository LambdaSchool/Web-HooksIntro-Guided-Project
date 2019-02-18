import React, { useState, useEffect } from 'react';
import PT from 'prop-types';
import { useIsOnline } from '../customEffects/useIsOnline';

const dbCallback = Function.prototype;

const style = {
  border: '1px solid black',
  padding: '10px',
  margin: '10px',
};

export default function FriendModern({ friend }) {
  console.log('modern renders');

  const isOnline = useIsOnline(friend.id);

  useEffect(() => {
    document.addEventListener('dblclick', dbCallback);
    return () => document.removeEventListener('dblclick', dbCallback);
  }, []);

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
