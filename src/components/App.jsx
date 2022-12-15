import Profile from './Profile';
import user from '../user';
import data from '../data';
import Statistics from './Statistics';
import StatisticsList from './StatisticsList';

// import data from "../"

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* {data.map(item => (
        <Statistics title={"Upload stats"} stats={data}
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))} */}
      <StatisticsList  stats={data}/>
      
    </div>
  );
};
