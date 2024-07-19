import { SearchInput } from '@components/Input/SearchInput/SearchInput';
import { useEffect, useState } from 'react';
import searchIcon from '@assets/search.svg';
import errorIcon from '@assets/error.svg';
import { CardList } from '@components/cardList/CardList';
import { useSearchFromLocalStorage } from '../../hooks/hooks';
// import { fetchSearchResults } from '../../services/fetch/fetchSearchResults';
// import { Person } from '@components/card/ICardProps';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Pagination } from '@components/pagination/Pagination';
import './app.scss';
import { Button } from '@components/button/Button';
import { useGetPeopleQuery } from '@services/fetch/api';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const App: React.FC = () => {
  const [search, setSearch, saveToLocalStorage] = useSearchFromLocalStorage();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);

  const navigate = useNavigate();
  const query = useQuery();

  const initialPage = parseInt(query.get('page') || '1', 10);
  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  const { data, error, isLoading } = useGetPeopleQuery({
    search,
    page: currentPage,
  });

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
    navigate(`?page=1`);
  };

  const handleResultClick = (id: string): void => {
    setSelectedDetail(id);
    navigate({ pathname: '/details/' + id, search: `?page=${currentPage}` });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`?page=${page}`);
  };

  const handleContainerClick = (): void => {
    if (selectedDetail) {
      setSelectedDetail(null);
      navigate({ pathname: '/', search: `?page=${currentPage}` });
    }
  };

  const handleThrowError = (): void => {
    console.error('Error caught in App: Test error');
  };

  const totalPages = data ? Math.ceil(data.count / 10) : 0;

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
        <div className="details-view">{selectedDetail && <Outlet />}</div>
      </div>
    </div>
  );
};
