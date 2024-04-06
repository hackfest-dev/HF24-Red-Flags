import LeadingContent from "../components/LeadingContent";
import Navbar from "../components/Navbar";
import TradeForgeContainer from "../components/TradeForgeContainer";
import "../styles/Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <div className="sidebar">
        <div className="menu">
          <LeadingContent />
        </div>
      </div>
      <main className="create-contract-button">
        <Navbar />
        <section className="trade-forge-container-wrapper">
          <TradeForgeContainer />
        </section>
      </main>
    </div>
  );
};

export default Desktop;
