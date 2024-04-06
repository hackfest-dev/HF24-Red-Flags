import "../styles/TradeForgeContainer.css";

const TradeForgeContainer = () => {
  return (
    <div className="trade-forge-container">
      <div className="trade-forge-container-inner">
        <div className="welcome-to-tradeforge-parent">
          <h1 className="welcome-to-tradeforge-container">
            <span>{`Welcome to `}</span>
            <span className="tradeforge">{`TradeForge `}</span>
          </h1>
          <div className="forging-trust-in-trading-data-wrapper">
            <h3 className="forging-trust-in">Forging trust in trading data</h3>
          </div>
        </div>
      </div>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="frame-container">
            <div className="total-earnings-parent">
              <div className="total-earnings">Total earnings</div>
              <div className="from-1-31-march">From 1-31 March, 2022</div>
            </div>
            <div className="view-report-wrapper">
              <div className="view-report">View report</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-div">
              <div className="parent">
                <div className="div" />
                <div className="report-button">
                  <div className="div1">
                    <span className="span">54</span>
                    <span className="span1">%</span>
                  </div>
                </div>
              </div>
              <div className="b-g-container">
                <div className="bg" />
                <div className="div2" />
                <div className="div3" />
                <div className="div4" />
              </div>
              <div className="navbar-instance">
                <span>$58,756.</span>
                <span className="span2">25</span>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="total-transactions-parent">
              <div className="total-transactions">Total transactions</div>
              <div className="from-1-31-march1">From 1-31 March, 2022</div>
            </div>
            <div className="view-report-container">
              <div className="view-report1">View report</div>
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="frame-parent3">
              <div className="frame-parent4">
                <div className="total-earnings-group">
                  <div className="total-earnings1" />
                  <div className="total-earnings2" />
                </div>
                <div className="div5">12</div>
              </div>
              <div className="bg-parent">
                <div className="bg1" />
                <div className="div6" />
                <div className="div7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-menu-btn">
        <button className="avatar-image">
          <div className="text10">
            <div className="browse-trade-sectrets">Browse trade sectrets</div>
            <div className="badge-text-green-wrapper">
              <div className="badge-text-green">
                <div className="text11">+23%</div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TradeForgeContainer;
