import { User } from "./user";

export class Comment {
  id: number;
  user: User;
  comment: string;

  constructor(id: number, user: User, comment: string) {
    this.id = id;
    this.user = user;
    this.comment = comment;
  }
}

export interface CommentRequest {
  dateTime: Date;
  content: string;
  fk_users?: string | null;
  fk_party?: string;
}

export interface CommentResponse {
  _id: string;
  dateTime: Date;
  content: string;
  fk_user: User;
  fk_party: string;
}
