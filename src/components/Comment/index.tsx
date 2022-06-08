import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

import user1 from "../../assets/user-1.svg";
import { Avatar } from "../Avatar";
import { Container } from "./style";

interface ICONTEUDOPROPS {
  content: string;
  deleteComment: (comment: string) => void;
  publishedDateRelativeToNowComment: string;
}

export function Comment({
  content,
  deleteComment,
  publishedDateRelativeToNowComment,
}: ICONTEUDOPROPS) {
  const [isliked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  function handleLike(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const clickedButton = event.target as HTMLButtonElement;
    setIsLiked(!isliked);

    if (!isliked) {
      setLikes(likes + 1);
      clickedButton.classList.toggle("liked");
    } else {
      setLikes(likes - 1);
      clickedButton.classList.toggle("liked");
    }
  }

  function handleDeleteComment() {
    deleteComment(content);
  }

  return (
    <Container>
      <Avatar hasBorder={false} src={user1} />

      <div className="commentBox">
        <div className="commentContent">
          <header>
            <div className="authorAndTime">
              <strong>Cassia</strong>
              <time
                title={publishedDateRelativeToNowComment}
                dateTime="2022-06-04 10:32:40"
              >
                {publishedDateRelativeToNowComment}
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
              type="button"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button type="button" onClick={handleLike}>
            <ThumbsUp />
            Aplaudir
            <span>{likes}</span>
          </button>
        </footer>
      </div>
    </Container>
  );
}
