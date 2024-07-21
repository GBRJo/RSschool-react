import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import './floatingPanel.scss';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '@components/button/Button';

export const FloatingPanel: React.FC = () => {
  const selectedIds = useSelector(
    (state: RootState) => state.selectedPeople.selectedIds,
  );
  const { theme } = useTheme();

  const handleClearSelection = () => {
    console.log('Loading selected items:', selectedIds);
  };

  const handleLoad = () => {
    console.log('Loading selected items:', selectedIds);
    // код для загрузки выбранных элементов
  };

  const getElementText = (count: number): string => {
    return count === 1 ? 'element' : 'elements';
  };

  if (selectedIds.length === 0) {
    return null;
  }

  return (
    <div className={`floating-panel ${theme}`}>
      <p>
        Selected {selectedIds.length} {getElementText(selectedIds.length)}
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
    </div>
  );
};
