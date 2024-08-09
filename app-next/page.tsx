'use client';

import { useEffect, useState } from 'react';
import { useGetPeopleQuery } from './api/hello';
import PersonDetails from './details/[personId]/page';
import { Button } from '~/components/button/Button';
import { CardList } from '~/components/cardList/CardList';
import { FloatingPanel } from '~/components/floatingPanel/FloatingPanel';
import { SearchInput } from '~/components/Input/SearchInput/SearchInput';
import { Pagination } from '~/components/pagination/Pagination';
import { useSearchFromLocalStorage } from '~/hooks/hooks';
import { useTheme } from '~/hooks/useTheme';
import { useNavigate } from '@remix-run/react';

const App: React.FC = () => {
  const [search, setSearch, saveToLocalStorage] = useSearchFromLocalStorage();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const initialPage = parseInt(query.get('page') || '1', 10);
    setCurrentPage(initialPage);
  }, []);

  const { data, error, isLoading } = useGetPeopleQuery({
    search,
    page: currentPage,
  });

  useEffect(() => {
    console.log('Selected detail:', selectedDetail);
  }, [selectedDetail]);

  useEffect(() => {
    if (isLoading) {
      console.log('Loading...');
    }
    if (error) {
      console.error('API Error:', error);
    }
    if (data) {
      console.log('API Data:', data);
    }
  }, [data, error, isLoading]);

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
    navigate(`/?page=1`);
  };

  const handleResultClick = (id: string): void => {
    setSelectedDetail(id);
    navigate(`/?page=${currentPage}&detail=${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/?page=${page}`);
  };

  const handleContainerClick = (): void => {
    if (selectedDetail) {
      setSelectedDetail(null);
      navigate(`/?page=${currentPage}`);
    }
  };

  const handleCloseDetails = (): void => {
    setSelectedDetail(null);
    navigate(`/?page=${currentPage}`);
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
