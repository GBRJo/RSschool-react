import { Checkbox } from '@components/checkbox/Checkbox';
import { Person } from '../ICardProps';
import {
  getSelectedPeopleUrls,
  togglePersonSelection,
} from '../../../store/selectedPeopleSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from 'store/store';

export interface ICardProps {
  person: Person;
  onClick: () => void;
  isActive: boolean;
}

export const Card: React.FC<ICardProps> = ({ person, onClick, isActive }) => {
  const dispatch = useDispatch();
  const selectedIds = useSelector(getSelectedPeopleUrls);
  const isChecked = selectedIds.includes(person.url);

  const handleCheckboxChange = () => {
    dispatch(togglePersonSelection(person));
  };

  const handleCheckboxClick = (event: React.MouseEvent) => {
    event.stopPropagation();
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
      <div onClick={handleCheckboxClick}>
        <Checkbox
          id={`checkbox-${person.url}`}
          checked={isChecked}
          onChange={handleCheckboxChange}
          label={`Select ${person.name} to keep in store`}
        />
      </div>
    </div>
  );
};
