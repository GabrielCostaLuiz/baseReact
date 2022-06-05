import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { SideBar } from "../../components/SideBar";
import { Wrapper } from "./style";

const post = [
  {
    id: 1,
    author: {
      name: "Gabriel Costa",
      avatarUrl: "https://github.com/GabrielCostaLuiz.png",
      role: "Administrador",
    },
    content: [
      {
        type: "text",
        content: "Fala galeraa 👋 ",
      },
      {
        type: "text",
        content: "Acabei de subir mais um projeto no meu portifa. ",
      },
      {
        type: "text",
        content:
          "É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀. ",
      },
      {
        type: "link",
        content: "gabrielcostaluiz/doctorcare",
      },
    ],
    publishedAt: new Date("2022-06-04 10:32:40"),
  },
  {
    id: 2,
    author: {
      name: "Vinicius Bueno",
      avatarUrl: "https://github.com/Vinicius-Bueno-Frontend.png",
      role: "Júnior",
    },
    content: [
      {
        type: "text",
        content: "Eae galeraa 👋 ",
      },
      {
        type: "text",
        content: "Acabei de terminar um projeto muito maneiro. ",
      },
      {
        type: "text",
        content:
          "É um projeto que fiz da Rocketseat. O nome do projeto é VoaAstronauta 🚀. ",
      },
      {
        type: "link",
        content: "vinicius/VoaAstronauta",
      },
    ],
    publishedAt: new Date("2022-06-01 10:32:40"),
  },
];

export function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </Wrapper>
    </>
  );
}
