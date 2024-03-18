import PropTypes from 'prop-types';
import ProfileMainInfo from './ProfileMainInfo/ProfileMainInfo';
import ProfileStatistics from './ProfileStatistics/ProfileStatistics';

const Profile = ({ data: { avatar, username, tag, location, stats } }) => {
  return (
    <div>
      <ProfileMainInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStatistics stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
