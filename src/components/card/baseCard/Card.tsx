import { Checkbox } from '@components/checkbox/Checkbox';
import { Person } from '../ICardProps';
import { togglePersonSelection } from '../../../store/selectedPeopleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';

export interface ICardProps {
  person: Person;
  onClick: () => void;
  isActive: boolean;
}

export const Card: React.FC<ICardProps> = ({ person, onClick, isActive }) => {
  const dispatch = useDispatch();
  const selectedIds = useSelector(
    (state: RootState) => state.selectedPeople.selectedIds,
  );
  const isChecked = selectedIds.includes(person.url);

  const handleCheckboxChange = () => {
    dispatch(togglePersonSelection(person.url));
  };

  return (
    <div
      data-testid="card"
      onClick={onClick}
      className={`card ${isActive ? 'active' : ''}`}
    >
      <h2>{person.name}</h2>
      <p>
        Gender: {person.gender}, Height: {person.height} cm, Mass: {person.mass}{' '}
        kg
      </p>
      <Checkbox
        id={`checkbox-${person.url}`}
        checked={isChecked}
        onChange={handleCheckboxChange}
        label={`Select ${person.name} to keep in store`}
      />
    </div>
  );
};
