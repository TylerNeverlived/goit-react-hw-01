import PropTypes from 'prop-types';

const ProfileMainInfo = ({ avatar, username, tag, location }) => {
  return (
    <div>
      <img src={avatar} alt={avatar} />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};

ProfileMainInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileMainInfo;
