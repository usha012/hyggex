import './App.css';
import Breadcrumb from './components/Breadcrumb';
import Content from './components/Content';
import FAQ from './components/FAQ';
import Header from './components/Header';
import NewFlashcard from './components/NewFlashcard';

function App() {
	return (
		<>
			<Header />
			<Breadcrumb />
			<Content />
			<NewFlashcard />
			<FAQ />
		</>
  	);
}

export default App;
