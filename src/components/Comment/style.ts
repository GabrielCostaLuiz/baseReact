import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  > img {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }

  .commentBox {
    flex: 1;

    footer {
      margin-top: 1rem;

      button {
        background: transparent;
        color: var(--gray-400);
        border: 0;
        cursor: pointer;
        border-radius: 2px;

        display: flex;
        align-items: center;

        &.liked {
          color: var(--green-500);
        }

        &:hover {
          color: var(--green-500);
        }

        svg {
          margin-right: 0.5rem;
        }

        span::before {
          content: "·";
          padding: 0 0.25rem;
        }
      }
    }
  }

  .commentContent {
    background-color: var(--gray-700);
    border-radius: 8px;
    padding: 1rem;

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      button {
        background: transparent;
        border: 0;
        color: var(--green-400);
        cursor: pointer;
        line-height: 0;
        border-radius: 2px;

        &:hover {
          color: var(--red-500);
        }
      }
    }

    p {
      margin-top: 1rem;
      color: var(--gray-300);
    }
  }

  .authorAndTime {
    strong {
      display: block;
      font-size: 0.875rem;
      line-height: 1.6;
    }

    time {
      display: block;
      font-size: 0.75rem;
      color: var(--gray-400);
      line-height: 1.6;
    }
  }
`;
