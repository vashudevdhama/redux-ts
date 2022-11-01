import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const dispatch = useDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionCreators.searchRepositories(term) as any);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={(e) => setTerm(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList; 
