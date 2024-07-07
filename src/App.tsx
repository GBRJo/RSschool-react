import { SearchInput } from '@components/Input/SearchInput/SearchInput';
import { ChangeEvent, Component, FormEvent } from 'react';
import { Button } from '@components/button/Button';
import searchIcon from './assets/search.svg';
import errorIcon from './assets/error.svg';

interface Person {
  name: string;
  description: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  height: string;
  mass: string;
  skin_color: string;
}

interface AppState {
  search: string;
  results: Person[];
  error: boolean;
}

export class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      search: '',
      results: [],
      error: false,
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
    this.handleThrowError = this.handleThrowError.bind(this);
  }

  componentDidMount() {
    const lastSearch = localStorage.getItem('lastSearch');
    if (lastSearch) {
      this.setState({ search: lastSearch }, () => {
        this.fetchSearchResults();
      });
    } else {
      this.fetchSearchResults();
    }
  }

  handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    const newSearch = event.target.value.trim();
    this.setState({ search: newSearch });
  }

  async handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    localStorage.setItem('lastSearch', this.state.search);
    this.fetchSearchResults();
  }

  async fetchSearchResults(): Promise<void> {
    const { search } = this.state;
    let apiUrl = 'https://swapi.dev/api/people/';

    if (search) {
      apiUrl += `?search=${encodeURIComponent(search)}`;
    }

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const results = data.results.map((person: Person) => ({
        name: person.name,
        description: (
          <>
            Birth Year: {person.birth_year}, Eye Color: {person.eye_color},
            Gender: {person.gender},
            <br />
            Hair Color: {person.hair_color}, Height: {person.height}cm, Mass:{' '}
            {person.mass}kg, Skin Color: {person.skin_color}
          </>
        ),
      }));
      this.setState({ results, error: false }); // Устанавливаем error в false при успешной загрузке
    } catch (error) {
      console.error('Error fetching search results:', error);
      this.setState({ results: [], error: true }); // Устанавливаем error в true при ошибке
      throw error; // Пробрасываем ошибку дальше для отображения в ErrorBoundary
    }
  }

  handleThrowError(): void {
    console.error('Error caught in App: Test error');
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="app">
          <h1>star wars</h1>
          <p>Something went wrong...</p>
        </div>
      );
    }
    return (
      <div className="app">
        <h1>star wars</h1>
        <span>
          Here you can search some facts about persons from Star Wars by name.
        </span>
        <form onSubmit={this.handleSubmit}>
          <SearchInput
            placeholder="Type to search..."
            value={this.state.search}
            onChange={this.handleSearchChange}
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
          onClick={this.handleThrowError}
        />
        <div className="results">
          {this.state.results.map((result, index) => (
            <div key={index}>
              <h2>{result.name}</h2>
              <p>{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
