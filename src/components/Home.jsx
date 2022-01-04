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
      <h2>Velkommen til GameMeet</h2>
      <p>
        Velkommen til et revolutionært koncept inden for gaming. Her er det
        muligt for dig at chatte med dine venner, og på samme tid skabe nye
        venner. Du vil kunne joine forskellige events inden for det game du
        foretrækker. Så hvis du foretrækker Counter Strike, Fortnite eller Call
        of Duty, så sørger denne platform for at hjælpe dig med at møde gaming
        venner, som deler samme passion som dig. Så skynd dig at skab en profil
        og begynd at chatte med nye venner med fælles interesser.
      </p>
      <Footer />
    </div>
  );
};

export default Home;
