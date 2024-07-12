import { Person } from './ICardProps';

export const Card: React.FC<Person> = ({
  name,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
}) => (
  <div className="card">
    <h2>{name}</h2>
    <p>
      Birth Year: {birth_year}, Eye Color: {eye_color}, Gender: {gender},
      <br />
      Hair Color: {hair_color}, Height: {height}cm, Mass: {mass}kg, Skin Color:{' '}
      {skin_color}
    </p>
  </div>
);
