import React from 'react';


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

export default class FriendTraditional extends React.Component {
  render() {
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
