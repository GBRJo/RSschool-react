import { SearchInput } from '../Input/SearchInput/SearchInput';
import { useEffect, useState } from 'react';
import { CardList } from '../cardList/CardList';
import { useSearchFromLocalStorage } from '../../hooks/hooks';
import { Pagination } from '../pagination/Pagination';
import { Button } from '../button/Button';
import { useGetPeopleQuery } from '../../services/fetch/api';
import { useTheme } from '../../hooks/useTheme';
import { FloatingPanel } from '../floatingPanel/FloatingPanel';
import { useRouter } from 'next/router';
import PersonDetails from '../../pages/details/[personId]';

const App: React.FC = () => {
  const [search, setSearch, saveToLocalStorage] = useSearchFromLocalStorage();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const query = router.query;

  const initialPage = parseInt((query.page as string) || '1', 10);
  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  const { data, error, isLoading } = useGetPeopleQuery({
    search,
    page: currentPage,
  });

  useEffect(() => {
    console.log('Selected detail:', selectedDetail);
  }, [selectedDetail]);

  useEffect(() => {
    if (error) {
      console.error('API Error:', error);
    }
    if (data) {
      console.log('API Data:', data);
    }
  }, [data, error]);

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const newSearch = event.target.value.trim();
    setSearch(newSearch);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setCurrentPage(1);
    saveToLocalStorage(search);
    router.push(`/?page=1`);
  };

  const handleResultClick = (id: string): void => {
    setSelectedDetail(id);
    // Обновляем URL, чтобы отразить выбранную деталь, но не перенаправляем на другую страницу
    router.push(`/?page=${currentPage}&detail=${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`/?page=${page}`);
  };

  const handleContainerClick = (): void => {
    if (selectedDetail) {
      setSelectedDetail(null);
      router.push(`/?page=${currentPage}`);
    }
  };

  const handleCloseDetails = (): void => {
    setSelectedDetail(null);
    router.push(`/?page=${currentPage}`);
  };

  const totalPages = data ? Math.ceil(data.count / 10) : 0;
  const themeIcon =
    theme === 'light' ? '/assets/dark.svg' : '/assets/light.svg';

  return (
    <div className={`app ${theme}`}>
      <div className="app-header" onClick={handleContainerClick}>
        <h1>Star Wars</h1>
        {error ? (
          <p>Something went wrong...</p>
        ) : (
          <>
            <span>
              Here you can search some facts about persons from Star Wars by
              name.
            </span>
            <form onSubmit={handleSubmit}>
              <SearchInput
                placeholder="Type to search..."
                value={search}
                onChange={handleSearchChange}
                name="search"
              />
              <Button
                ariaLabel="Search"
                imgSrc="/assets/search.svg"
                imgAlt="Search Icon"
                type="submit"
                className="search icon-invert"
              />
            </form>
            <div className="buttons">
              <Button
                ariaLabel="Theme"
                imgSrc={themeIcon}
                imgAlt="Theme Icon"
                type="button"
                className="theme"
                onClick={toggleTheme}
              />
            </div>
          </>
        )}
      </div>
      <div className="results-container">
        <div className="results-list" onClick={handleContainerClick}>
          {isLoading ? (
            <div className="spinner">Loading...</div>
          ) : (
            <>
              <CardList
                results={data?.results || []}
                onResultClick={handleResultClick}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
        <div className="details-view">
          {selectedDetail && (
            <PersonDetails
              personId={selectedDetail}
              onClose={handleCloseDetails}
            />
          )}
        </div>
      </div>
      <FloatingPanel />
    </div>
  );
};

export default App;
