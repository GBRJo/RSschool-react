import { SearchInput } from '@components/Input/SearchInput/SearchInput';
import { ChangeEvent, Component, FormEvent } from 'react';
import './App.css';

interface Person {
  name: string;
  description: string;
  hair_color: string;
  eye_color: string;
}

interface AppState {
  search: string;
  results: Person[];
}

export class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      search: '',
      results: [],
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
  }

  componentDidMount() {
    // При загрузке компонента проверяем Local Storage на наличие последнего поискового запроса
    const lastSearch = localStorage.getItem('lastSearch');
    if (lastSearch) {
      this.setState({ search: lastSearch }, () => {
        // После установки состояния выполняем запрос к API с последним поисковым запросом
        this.fetchSearchResults();
      });
    } else {
      // Если в Local Storage нет последнего запроса, загружаем все элементы
      this.fetchSearchResults();
    }
  }

  handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    const newSearch = event.target.value.trim();
    this.setState({ search: newSearch });
  }

  async handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    // Сохраняем последний поисковый запрос в Local Storage
    localStorage.setItem('lastSearch', this.state.search);
    // Выполняем запрос к API с текущим поисковым запросом
    this.fetchSearchResults();
  }

  async fetchSearchResults(): Promise<void> {
    const { search } = this.state;
    let apiUrl = 'https://swapi.dev/api/people/';

    if (search) {
      // Если есть поисковый запрос, добавляем его к URL для поиска по API
      apiUrl += `?search=${encodeURIComponent(search)}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const results = data.results.map((person: Person) => ({
        name: person.name,
        description: `Hair Color: ${person.hair_color}, Eye Color: ${person.eye_color}`,
      }));
      this.setState({ results });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <form onSubmit={this.handleSubmit}>
          <SearchInput
            label="Search"
            placeholder="Type to search..."
            value={this.state.search}
            onChange={this.handleSearchChange}
            name="search"
          />
          <button type="submit">Search</button>
        </form>
        <div>
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
