import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../components/context/github/GithubContext';

const User = () => {
  const { getUser, user } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return (
    <div>
      <h1>{user.login}</h1>
    </div>
  );
};

export default User;
