import { Button } from '@components/button/Button';
import arrowsLeftIcon from '@assets/arrows-left.svg';
import arrowRightIcon from '@assets/arrow-right.svg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <Button
        disabled={currentPage === 1}
        ariaLabel="Previous"
        imgSrc={arrowsLeftIcon}
        imgAlt="Left Icon"
        type="button"
        className="arrow-left"
        onClick={handlePrevious}
      />
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <Button
        disabled={currentPage === totalPages}
        ariaLabel="Next"
        imgSrc={arrowRightIcon}
        imgAlt="Right Icon"
        type="button"
        className="arrow-right"
        onClick={handleNext}
      />
    </div>
  );
};
