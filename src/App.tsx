import  { AxiosResponse } from 'axios';
import { useState } from 'react';
import './App.css';
import { Matches } from './types/Match';
import axios from "./request/index"

function App() {
  const [summonerName, setSummonerName] = useState('');
  const [matchHistory, setMatchHistory] = useState<Matches>();


  const getMatchResults = () => {
       axios.get(summonerName).then((res: AxiosResponse)=> {
        setMatchHistory(res.data)
       })
  }


  return (
    <div className="App bg-[#283040]">
      <div className="App flex  justify-center p-10">
      <input className="border border-1 border-black mx-10 w-64" value={summonerName} onChange={(e) => setSummonerName(e.target.value)} /> 
      <button
        className="px-10 py-2 bg-blue-900 border-2 border-blue-900 text-white rounded-sm"
        onClick={getMatchResults}
      >
        View results
      </button>
    </div>
    </div>
  );
}

export default App;
