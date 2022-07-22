import './App.css';
import {Header, Footer} from './shared';
import { ClientCard } from './shared/components/ClientCard/ClientCard';
import { CardProps } from './shared/types';

function App() {
  const cards: CardProps[] = [
    {title: 'BOL.COM', description: 'A Summer island in the Netherlands', image: 'https://picsum.photos/200?random=1', readMoreLink: 'https://www.bol.com/nl/'},
    {title: 'KEMPEN', description: 'Not some average banking website', image: 'https://picsum.photos/200?random=2', readMoreLink: 'https://www.bol.com/nl/'},
    {title: 'PHILIPS', description: 'Beautiful design meets innovative technology', image: 'https://picsum.photos/200?random=3', readMoreLink: 'https://www.bol.com/nl/'},
    {title: 'GEMEENTEMUSEUM', description: 'A 100 years of Mondriaan & De Stijl', image: 'https://picsum.photos/200?random=4', readMoreLink: 'https://www.bol.com/nl/'},
  ]

  return (
    <div className="App">
      <Header></Header>
      <ClientCard cards = {cards}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
