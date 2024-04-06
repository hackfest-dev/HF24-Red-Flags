import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="title">
        <h1 className="heading">Hello, Raj !</h1>
        <div className="sub">Here’s your dashboard overview.</div>
        <div className="breadcrumbs">
          <div className="contract">Contract</div>
          <img className="icon8" alt="" src="/icon-8.svg" />
          <div className="contract1">General Info</div>
          <img className="icon9" alt="" src="/icon-8.svg" />
          <div className="contract2">Scope of Work</div>
          <img className="icon10" alt="" src="/icon-8.svg" />
          <div className="contract3">Payment Details</div>
          <img className="icon11" alt="" src="/icon-8.svg" />
          <div className="general-info">Sign</div>
        </div>
      </div>
      <div className="right-menu">
        <button className="button">
          <img className="icon12" alt="" src="/icon.svg" />
          <div className="create-a-contract">CREATE</div>
          <img className="icon13" alt="" src="/icon.svg" />
        </button>
        <div className="icon14">
          <img className="icon15" alt="" src="/icon-13.svg" />
        </div>
        <div className="user">
          <div className="avatar">
            <img
              className="image-icon"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <img className="check-icon" alt="" src="/check.svg" />
          </div>
          <div className="text9">
            <div className="chris-miguel">Chris Miguel</div>
            <div className="freelancer">Freelancer</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
