// src/App.jsx

import Profile from './Profile/Profile';
import userData from './Profile/userData/userData.json';

export default function App() {
  return (
    <>
      <Profile data={userData} />
    </>
  );
}
