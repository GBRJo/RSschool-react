import { SearchInput } from '@components/Input/SearchInput/SearchInput';
import { useEffect, useState } from 'react';
import { Button } from '@components/button/Button';
import searchIcon from '@assets/search.svg';
import errorIcon from '@assets/error.svg';
import { CardList } from '@components/cardList/CardList';
import { useSearchFromLocalStorage } from '../../hooks/hooks';
import { fetchSearchResults } from '../../services/fetch/fetchSearchResults';
import { Person } from '@components/card/ICardProps';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Pagination } from '@components/pagination/Pagination';
import './app.scss';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const App: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Person[]>([]);
  const [search, setSearch, saveToLocalStorage] = useSearchFromLocalStorage();
  const [totalCount, setTotalCount] = useState<number>(0);
  const navigate = useNavigate();
  const query = useQuery();

  const initialPage = parseInt(query.get('page') || '1', 10);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const newSearch = event.target.value.trim();
    setSearch(newSearch);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    setCurrentPage(1);
    saveToLocalStorage(search);
    await fetchSearchResults(
      search,
      1,
      setResults,
      setError,
      setLoading,
      setTotalCount,
    );
    navigate(`?page=1`);
  };

  const handleResultClick = (id: string): void => {
    setSelectedDetail(id);
    navigate({ pathname: '/details/' + id, search: `?page=${currentPage}` });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchSearchResults(
      search,
      page,
      setResults,
      setError,
      setLoading,
      setTotalCount,
    );
    navigate(`?page=${page}`);
  };

  useEffect(() => {
    fetchSearchResults(
      search,
      currentPage,
      setResults,
      setError,
      setLoading,
      setTotalCount,
    );
  }, [currentPage, search]);

  const handleContainerClick = (): void => {
    if (selectedDetail) {
      setSelectedDetail(null);
      navigate({ pathname: '/', search: `?page=${currentPage}` });
    }
  };

  const handleThrowError = (): void => {
    console.error('Error caught in App: Test error');
    setError(true);
  };

  const totalPages = Math.ceil(totalCount / 10);

  return (
    <div className="app">
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
                imgSrc={searchIcon}
                imgAlt="Search Icon"
                type="submit"
                className="search"
              />
            </form>
            <Button
              ariaLabel="Error"
              imgSrc={errorIcon}
              imgAlt="Error Icon"
              type="button"
              className="error"
              onClick={handleThrowError}
            />
          </>
        )}
      </div>
      <div className="results-container">
        <div className="results-list" onClick={handleContainerClick}>
          {isLoading ? (
            <div className="spinner">Loading...</div>
          ) : (
            <>
              <CardList results={results} onResultClick={handleResultClick} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
        <div className="details-view">{selectedDetail && <Outlet />}</div>
      </div>
    </div>
  );
};
