import { Person } from '../ICardProps';

export interface ICardProps {
  person: Person;
  onClick: () => void;
  isActive: boolean;
}

export const Card: React.FC<ICardProps> = ({ person, onClick, isActive }) => (
  <div
    data-testid="card"
    onClick={onClick}
    className={`card ${isActive ? 'active' : ''}`}
  >
    <h2>{person.name}</h2>
    <p>
      Gender: {person.gender}, Height: {person.height} cm, Mass: {person.mass}{' '}
      kg,
    </p>
  </div>
);
