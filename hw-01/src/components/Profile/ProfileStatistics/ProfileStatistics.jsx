import PropTypes from 'prop-types';

const ProfileStatistics = ({ stats }) => {
  return (
    <ul>
      <li>
        <span>followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  );
};

ProfileStatistics.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default ProfileStatistics;
