import { Person } from '../ICardProps';
interface DetailedCardProps {
  person: Person;
}

const getIdFromUrl = (url: string): string => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

export const DetailedCard: React.FC<DetailedCardProps> = ({ person }) => {
  const personId = getIdFromUrl(person.url);

  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`;

  return (
    <div className="detailed-card">
      <img src={imageUrl} alt={person.name} />

      <div className="detailed-text">
        <h3>{person.name}</h3>
        <p>Height: {person.height} cm</p>
        <p>Mass: {person.mass} kg</p>
        <p>Hair Color: {person.hair_color}</p>
        <p>Skin Color: {person.skin_color}</p>
        <p>Eye Color: {person.eye_color}</p>
        <p>Birth Year: {person.birth_year}</p>
        <p>Gender: {person.gender}</p>
      </div>
    </div>
  );
};
