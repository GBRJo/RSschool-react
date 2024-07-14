import { Person } from '../ICardProps';

interface CardProps {
  person: Person;
  onClick?: () => void;
  isActive: boolean;
}

export const Card: React.FC<CardProps> = ({ person, onClick, isActive }) => (
  <div className={`card ${isActive ? 'active' : ''}`} onClick={onClick}>
    <h2>{person.name}</h2>
    <p>
      Gender: {person.gender}, Height: {person.height}cm, Mass: {person.mass}kg,
    </p>
  </div>
);
