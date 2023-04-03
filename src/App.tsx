import  { AxiosResponse } from 'axios';
import { useState } from 'react';
import './App.css';
import { Matches, MatchStatistics } from './types/Match';
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
    <div className="App bg-[#28303f]">
      <div className="App flex  justify-center p-10">
      <input className="border border-1 border-black mx-10 w-64" value={summonerName} onChange={(e) => setSummonerName(e.target.value)} /> 
      <button
        className="px-10 py-2 bg-blue-900 border-2 border-blue-900 text-white rounded-sm"
        onClick={getMatchResults}
      >
        View results
      </button>
    </div>
    <div className="flex justify-center mx-20">
    <table className="w-full overflow-auto text-sm text-left border-separate  border-spacing-y-1 bg-white">
          <tbody>
            { matchHistory ?
              <>
              {matchHistory.matches.map((matchEl : MatchStatistics) => (
                <tr className={`border rounded-sm  ${matchEl.win ? 'bg-[#283040]': ' bg-red-900 '}`} >
                  {/**
                   * First column
                   */}
                  <td className="p-10">
                    <p className={`font-bold  ${matchEl.win ? 'text-red-500 ' : 'text-blue-500'}`}> {matchEl.championName}</p>
                    <br/>
                    <b>{matchEl.win ?  'Victory' : 'Defeat'}</b>
                    <p className="text-[#9596aa]">{matchEl.duration.minutes}m : {matchEl.duration.seconds}s</p>
                    <p className="text-[#9596aa]">{matchEl.gameDate}</p>
                  </td>

                   {/**
                   * Second column
                   */}
                  <td className="p-10">
                    <div className="flex flex-wrap"></div>
                    <img src={matchEl.profileImg} alt="profile-icon" className="border rounded-full w-24 h-24" />
                  </td>

                  {/**
                   * Third column
                   */}
                  <td className="p-10 text-[#9596aa]">
                   <p className="font-bold">Kill: {matchEl.kills}</p>
                   <p className="font-bold">Death: {matchEl.deaths}</p>
                   <p className="font-bold">Assist: {matchEl.assists}</p>
                  </td>
                   {/**
                   * Fourth column
                   */}
                  <td className="p-10 text-[#9596aa]">
                   <p className="font-bold">Championship Level: {matchEl.champLevel}</p>
                  </td>
                   {/**
                   * Fifth column
                   */}
                  <td className="p-10 flex flex-row flex-wrap">
                   {matchEl?.items?.map((image) => (
                     <img src={image.img} alt={image.name} className="rounded-full h-12 w-12 p-2" />
                   ))}
                  </td>
                </tr>
              ))}
              </>
            : null }

          </tbody>

        </table>
    
    </div>
    </div>
  );
}

export default App;
