import { Person } from '../ICardProps';
interface CardProps {
  person: Person;
  onClick?: () => void;
}
export const Card: React.FC<CardProps> = ({ person, onClick }) => (
  <div className="card" onClick={onClick}>
    <h2>{person.name}</h2>
    <p>
      Gender: {person.gender}, Height: {person.height}cm, Mass: {person.mass}kg,
    </p>
  </div>
);
