import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, FormInstance, message, Form as AntdForm } from "antd";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Comment,
  CommentRequest,
  CommentResponse,
} from "../../../types/comment";
import { User } from "../../../types/user";
import AddComment from "./AddComment";

export default function Comments() {
  const [isAddCommentVisible, setIsAddCommentVisible] = useState(false);
  const { id } = useParams();
  const [form] = AntdForm.useForm();
  const [comments, setComments] = useState([] as CommentResponse[]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/comments/${id}`).then((res) => {
      setComments(res.data);
    });
  }, []);

  const handleAddComment = useCallback((comment) => {
    console.log(comment);
    const commentRequest: CommentRequest = {
      dateTime: new Date(),
      content: comment.content,
      fk_users: localStorage.getItem("userID"),
      fk_party: id,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/comments/${id}`, commentRequest)
      .then((res) => {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/users/id/${localStorage.getItem(
              "userID"
            )}`
          )
          .then((res) => {
            const user: User = res.data;
            const newComment: CommentResponse = {
              _id: "1",
              dateTime: new Date(),
              content: comment.content,
              fk_party: "1",
              fk_user: user,
            };
            setComments(comments.concat(newComment));
            form.resetFields();
            setIsAddCommentVisible(false);
            message.success("Comment successfully posted!");
          });
      });
  }, []);

  return (
    <>
      <Button
        type="primary"
        className="button buttonInviteMore"
        style={{ paddingBottom: "30px", left: "28%" }}
        icon={!isAddCommentVisible ? <DownOutlined /> : <UpOutlined />}
        onClick={() => setIsAddCommentVisible(!isAddCommentVisible)}
      >
        ADD COMMENT
      </Button>
      
      <div className="tabContent">
        <AddComment
          onFinish={handleAddComment}
          hidden={!isAddCommentVisible}
          form={form}
        />
        {comments.map((comment) => {
          return (
            <div className="listItem" key={comment._id}>
              <img className="picture" src="../profilepicsample.png" />
              <div className="commentInnerContainer">
                <span className="userName">
                  {comment.fk_user &&
                    comment.fk_user.name + " " + comment.fk_user.surname}
                </span>
                <span className="comment">{comment.content}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
