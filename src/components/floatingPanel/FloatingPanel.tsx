import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import './floatingPanel.scss';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '@components/button/Button';
import { clearSelection } from '@store/selectedPeopleSlice';
import Papa from 'papaparse';

export const FloatingPanel: React.FC = () => {
  const selectedPeople = useSelector(
    (state: RootState) => state.selectedPeople.selectedPeople,
  );
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  const handleClearSelection = () => {
    dispatch(clearSelection());
  };

  const handleLoad = () => {
    const selectedItems = selectedPeople.map((person) => ({
      name: person.name,
      birth_year: person.birth_year,
      eye_color: person.eye_color,
      gender: person.gender,
      hair_color: person.hair_color,
      height: person.height,
      mass: person.mass,
      skin_color: person.skin_color,
      homeworld: person.homeworld,
      films: person.films.join(', '),
      species: person.species.join(', '),
      starships: person.starships.join(', '),
      vehicles: person.vehicles.join(', '),
      url: person.url,
      created: person.created,
      edited: person.edited,
    }));

    const csvData = Papa.unparse(selectedItems);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    if (downloadLinkRef.current) {
      downloadLinkRef.current.href = url;
      downloadLinkRef.current.download = `${selectedPeople.length}_people.csv`;
      downloadLinkRef.current.click();
    }
  };

  const getElementText = (count: number): string => {
    return count === 1 ? 'element' : 'elements';
  };

  if (selectedPeople.length === 0) {
    return null;
  }

  return (
    <div className={`floating-panel ${theme}`}>
      <p>
        Selected {selectedPeople.length} {getElementText(selectedPeople.length)}
      </p>
      <Button
        ariaLabel="Submit"
        text="Clean"
        onClick={handleClearSelection}
        className="text-only"
      />
      <Button
        ariaLabel="Submit"
        text="Download"
        onClick={handleLoad}
        className="text-only"
      />
      <a ref={downloadLinkRef} style={{ display: 'none' }}>
        Download
      </a>
    </div>
  );
};
