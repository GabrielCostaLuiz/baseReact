import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { CommentList, Container } from "./styles";

interface IPOSTPROPS {
  author: IAUTHOR;
  content: ICONTENT[];

  publishedAt: Date;
}
interface ICONTENT {
  type: string;
  content: string;
}

interface IAUTHOR {
  name: string;
  avatarUrl: string;
  role: string;
}

export function Post({ author, content, publishedAt }: IPOSTPROPS) {
  const [comments, setComments] = useState([]) as any;

  const [newComment, setNewComment] = useState<string>("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBr }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const publishedDateRelativeToNowComment = formatDistanceToNow(new Date(), {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newComment]);

    setNewComment("");
  }

  function handleChangeComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio");
  }

  function deleteComment(comment: string) {
    // filter percorre todos os elementos do array e retorna um novo array sem o elemento que passamos como parametro
    const commentsWithoutRemoved = comments.filter((c: string) => {
      return c !== comment;
    });

    setComments(commentsWithoutRemoved);
  }

  const isNewCommentEmpty = newComment.trim().length === 0;

  return (
    <Container>
      <header>
        <div className="author">
          <Avatar src={author.avatarUrl} />
          <div className="authorInfo">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="content">
        {content.map((item) => {
          if (item.type === "text") {
            return <p key={item.content}>{item.content}</p>;
          }

          if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  {item.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className="comentForm">
        <strong>Deixe seu feedback</strong>

        <textarea
          name="input"
          value={newComment}
          placeholder="Deixe um comentario"
          onChange={handleChangeComment}
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <CommentList>
        {comments.map((comment: string) => {
          return (
            <Comment
              key={comment}
              content={comment}
              deleteComment={deleteComment}
              publishedDateRelativeToNowComment={
                publishedDateRelativeToNowComment
              }
            />
          );
        })}
      </CommentList>
    </Container>
  );
}
