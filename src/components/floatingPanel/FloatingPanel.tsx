'use client';

import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import './floatingPanel.scss';
import { useTheme } from '../../hooks/useTheme';
import { RootState } from '../../store/store';
import { clearSelection } from '../../store/selectedPeopleSlice';
import { Button } from '../button/Button';
import { Person } from '../card/ICardProps';

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
    const headers = [
      'name',
      'birth_year',
      'eye_color',
      'gender',
      'hair_color',
      'height',
      'mass',
      'skin_color',
      'homeworld',
      'films',
      'species',
      'starships',
      'vehicles',
      'url',
      'created',
      'edited',
    ];

    const csvRows = [];
    csvRows.push(headers.join(','));

    for (const person of selectedPeople) {
      const values = headers.map((header) => {
        const value = person[header as keyof Person];
        return Array.isArray(value) ? value.join(', ') : value;
      });
      csvRows.push(values.join(','));
    }

    const csvData = csvRows.join('\n');

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
