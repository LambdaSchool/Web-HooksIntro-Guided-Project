import React from 'react';

const style = {
  border: '1px solid black',
  padding: '10px',
  margin: '10px',
};

// fake request to server
export function checkOnlineStatus(id) {
  console.log('starting online status check');

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(id % 2 === 0);
    }, 1000);
  });
}

export class FriendTraditional extends React.Component {
  render() {
    console.log('render function of Friend runs!');

    const isOnline = false;
    const { friend } = this.props;

    return (
      <div style={style}>
        <h3>(traditional friend) {friend.name}</h3>

        <div style={{ color: isOnline ? 'green' : 'red' }}>
          is {!isOnline && 'NOT '}online
          {isOnline && ' :)'}
        </div>
      </div>
    );
  }
}

export function FriendModern({ friend }) {
  const isOnline = false;

  return (
    <div style={style}>
      <h3>(modern friend) {friend.name}</h3>

      <div style={{ color: isOnline ? 'green' : 'red' }}>
        is {!isOnline && 'NOT '}online
        {isOnline && ' :)'}
      </div>
    </div>
  );
}
