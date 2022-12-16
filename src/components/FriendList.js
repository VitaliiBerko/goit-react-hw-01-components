import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";

// console.log(friends);


export const FriendList =({friends}) => {

    return (
        <ul class="friend-list">
          {friends.map(item => (
            <li className="item" key={item.id}>
              <FriendListItem avatar={item.avatar} name={item.name} isOnline ={item.isOnline}/>
            </li>
          ))}
        </ul>
      );    

}

FriendList.proppTypes ={
  friends:PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.number,
      isOnline: PropTypes.bool,
    }
  ))
}
