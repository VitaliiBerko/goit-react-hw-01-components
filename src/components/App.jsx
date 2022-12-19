import Profile from './Profile/Profile';
import user from '../components/Profile/user';
import data from '../components/Statistics/data';

import { Fragment } from 'react';

import { FriendList } from './FriendList/FriendList';
import friends from '../components/FriendList/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../components/TransactionHistory/transactions';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <>
        <Statistics title="Upload stats" stats={data} />
      </>
      <>
        <FriendList friends={friends} />
      </>
      <TransactionHistory items={transactions} />
    </Fragment>
  );
};
