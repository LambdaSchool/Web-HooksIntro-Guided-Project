import React from 'react';

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
      <div>
        <h3>{friend.name}</h3>

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
    <div>
      <h3>{friend.name}</h3>

      <div style={{ color: isOnline ? 'green' : 'red' }}>
        is {!isOnline && 'NOT '}online
        {isOnline && ' :)'}
      </div>
    </div>
  );
}
