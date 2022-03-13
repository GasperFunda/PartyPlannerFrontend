export interface PartyFormRequest {
  title: string;
  description: string;
  location: string;
  private: boolean;
  date: moment.Moment;
  time: moment.Moment;
}

export interface CreatePartyRequest {
  partyName: string;
  location: string;
  private: boolean;
  image: string;
  likes: number;
  description: string;
  dateTime: string;
  fk_user_host: string | null;
}

export interface PartyResponse {
  _id: string;
  partyName: string;
  location: string;
  private: boolean;
  image: string;
  likes: number;
  description: string;
  dateTime: string;
  fk_user_host: string | null;
}
