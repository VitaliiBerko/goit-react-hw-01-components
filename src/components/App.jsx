import Profile from './Profile';
import user from '../user';
import data from '../data';
import StatisticsList from './StatisticsList';
import { Fragment } from 'react';
import { ContainerTitle } from './ContainerTitle';
import { FriendList } from './FriendList';
import friends from "../friends"
import { TransactionHistory } from './TransactionHistory';
import transactions from "../transactions";



export const App = () => {
  return (
    <Fragment>
    {/* // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }} */}
    
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <>
      <ContainerTitle title="Upload stats">
      <StatisticsList  stats={data}/>
      </ContainerTitle>
      </>
      <>
      <FriendList friends ={friends}/>
      </>
      <TransactionHistory items={transactions}/>

    </Fragment>
  );
};
