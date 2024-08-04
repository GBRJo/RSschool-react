'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '../src/components/button/Button';
import { CardList } from '../src/components/cardList/CardList';
import { FloatingPanel } from '../src/components/floatingPanel/FloatingPanel';
import { SearchInput } from '../src/components/Input/SearchInput/SearchInput';
import { Pagination } from '../src/components/pagination/Pagination';
import { useSearchFromLocalStorage } from '../src/hooks/hooks';
import { useTheme } from '../src/hooks/useTheme';
import { useGetPeopleQuery } from './api/hello';
import PersonDetails from './details/[personId]/page';

const App: React.FC = () => {
  const [search, setSearch, saveToLocalStorage] = useSearchFromLocalStorage();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    // This code runs only on the client
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
