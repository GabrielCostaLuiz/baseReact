import styled from "styled-components";

export const Container = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;

  & + & {
    margin-top: 2rem;
  }

  .content {
    line-height: 1.6;
    color: var(--gray-300);
    margin-top: 1.5rem;

    p {
      margin-top: 1rem;
    }

    a {
      font-weight: bold;
      color: var(--green-500);
      text-decoration: none;

      &:hover {
        color: var(--green-300);
      }
    }
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    time {
      font-size: 0.875rem;
      color: var(--gray-400);
    }

    .author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .authorInfo {
      strong {
        display: block;
        color: var(--gray-100);
        line-height: 1.6;
      }

      span {
        display: block;
        font-size: 0.875rem;
        color: var(--gray-400);
        line-height: 1.6;
      }
    }
  }

  .comentForm {
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--gray-600);

    &:focus-within footer {
      opacity: 1;
      visibility: visible;
      max-height: fit-content;
    }

    > strong {
      line-height: 1.6;
      color: var(--gray-100);
    }

    textarea {
      width: 100%;
      background: var(--gray-900);
      border: 0;
      resize: none;
      height: 6rem;
      padding: 1rem;
      border-radius: 8px;
      color: var(--gray-100);
      line-height: 1.4;
      margin-top: 1rem;
    }

    button {
      padding: 1rem 1.5rem;
      margin-top: 1rem;
      background: var(--green-500);
      border: 0;
      border-radius: 8px;
      color: var(--white);
      font-weight: bold;
      transition: background-color 0.1s;

      &:not(:disabled):hover {
        background: var(--green-300);
        cursor: pointer;
      }
    }

    footer {
      opacity: 0;
      visibility: hidden;
      max-height: 0;
    }
  }
`;

export const CommentList = styled.div`
  margin-top: 2rem;
`;
