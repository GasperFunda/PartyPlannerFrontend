import { Space } from "antd";
import { Comment } from "../../../types/comment";

export interface IFormProps {
  comments: Comment[]
}

export default function Comments(props: IFormProps) {
  return (
    <div className="commentTab">
      {props.comments.map((comment) => {
        return (
          <div className="commentContainer" key={comment.id}>
            <img className="userPicture" src={"../" + comment.user.picture} />
            <div className="commentInnerContainer">
              <span className="userName">{comment.user.name + " " + comment.user.surname}</span>
              <span className="comment">{comment.comment}</span>
            </div>
          </div>
        )
      })}
    </div>
  );
}