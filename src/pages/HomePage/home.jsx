import SearchBook from "../../components/searchBook";
import CardsSection from "../../components/cardsSection";

const Home = () => {
  return (
    <div className="main__section">
      <div className="home__section">
        <SearchBook></SearchBook>
        <CardsSection></CardsSection>
      </div>
    </div>
  );
};
export default Home;
