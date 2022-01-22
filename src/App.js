import { useEffect, useState } from 'react';
import './App.css';
import Coin from './components/Coin/Coin';

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  
  
  useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins?skip=0")
    .then(res => res.json())
    .then(data => setListOfCoins(data.coins))
  }, [])
  
  const filteredCoin = listOfCoins.filter(coin => coin.name.toLowerCase().includes(searchWord.toLowerCase()));

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input type="text" placeholder='Bitcoin...' onChange={(event) => setSearchWord(event.target.value)} />
      </div>
      <div className="cryptoDisplay">
        {
          filteredCoin.map(coin => <Coin 
            key={coin.id}
            name={coin.name}
            price={coin.price}
            icon={coin.icon}
            symbol={coin.symbol} />)
        }
      </div>
    </div>
  );
}

export default App;
