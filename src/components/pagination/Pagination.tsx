import { Button } from '../button/Button';

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
        imgSrc="/assets/arrows-left.svg"
        imgAlt="Left Icon"
        type="button"
        className="arrow-left icon-invert"
        onClick={handlePrevious}
      />
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <Button
        disabled={currentPage === totalPages}
        ariaLabel="Next"
        imgSrc="/assets/arrow-right.svg"
        imgAlt="Right Icon"
        type="button"
        className="arrow-right icon-invert"
        onClick={handleNext}
      />
    </div>
  );
};
