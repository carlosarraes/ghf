import { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('something');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const handleClear = (e) => clearUsers();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                value={text}
                onChange={handleChange}
                placeholder="Search"
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" type="submit">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-large" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
