import { Button } from "antd";
import { Comment } from "../../../types/comment";

export interface IFormProps {
  comments: Comment[]
}

export default function Comments(props: IFormProps) {
  return (
    <>
      <Button
        type="primary"
        className="button buttonInviteMore"
        size="middle"
      >
        ADD COMMENT
      </Button>
      <div className="tabContent">
        {props.comments.map((comment) => {
          return (
            <div className="listItem" key={comment.id}>
              <img className="picture" src={"../" + comment.user.picture} />
              <div className="commentInnerContainer">
                <span className="userName">{comment.user.name + " " + comment.user.surname}</span>
                <span className="comment">{comment.comment}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}