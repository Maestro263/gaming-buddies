import "../styles/home.scss";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <h1>GameMeet</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qdD6Ll6g3NM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat
        reiciendis minus nulla recusandae dignissimos ipsam ullam ipsum
        molestiae eum, quibusdam vitae alias sed debitis similique obcaecati
        molestias vero doloribus nostrum laboriosam quaerat facere tempore. Eos
        numquam perspiciatis ratione aperiam ad sed nemo pariatur consectetur
        dolorem at totam, incidunt molestiae.
      </p>
      <Footer />
    </div>
  );
};

export default Home;
