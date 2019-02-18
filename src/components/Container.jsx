import React from 'react';
import FriendTraditional from './FriendTraditional';
import FriendModern from './FriendModern';


const friends = [
  { id: 1, name: 'Luke' },
  { id: 2, name: 'Orlando' },
  { id: 3, name: 'Tom' },
  { id: 4, name: 'Samar' },
];

export default class Container extends React.Component {
  state = {
    selectedFriendId: null,
  }

  selectFriend = id => this.setState({ selectedFriendId: id })

  getCurrentFriend = () => friends.find(
    fr => fr.id === this.state.selectedFriendId,
  )

  render() {
    return (
      <div>
        Select a friend to chat with:&nbsp;
        {
          friends.map(friend => {
            return (
              <button
                key={friend.id}
                onClick={() => this.selectFriend(friend.id)}
              >
                {friend.name}
              </button>
            );
          })
        }
        <div>
          {
            this.state.selectedFriendId &&
            <FriendTraditional
              friend={this.getCurrentFriend()}
            />
          }
        </div>

        <div>
          {
            this.state.selectedFriendId &&
            <FriendModern
              friend={this.getCurrentFriend()}
            />
          }
        </div>
      </div>
    );
  }
}
