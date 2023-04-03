export interface MatchStatistics {
  summonerName: string;
  duration: Duration;
  items?: ItemsPurchased[];
  profileImg: string;
  gameDate: string;
  goldEarned: number;
  goldSpent: number;
  champLevel: number;
  championName: string;
  kills: number;
  deaths: number;
  assists: number;
  win: boolean;
}

export interface Matches {
	matches: MatchStatistics[]
}

interface Duration {
  minutes: number;
  seconds: number;
}

export interface ItemsPurchased {
  name: string;
  img: string;
}