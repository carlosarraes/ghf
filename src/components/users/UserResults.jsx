import { useEffect, useState } from 'react';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  const showUsers = users.map((user) => {
    return <h3 key={user.login}>{user.login}</h3>;
  });
  return !loading ? (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">{showUsers}</div>
  ) : (
    <div>
      <h3>Loading...</h3>
    </div>
  );
};

export default UserResults;
