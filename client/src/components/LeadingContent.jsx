import "../styles/LeadingContent.css";

const LeadingContent = () => {
  return (
    <div className="leading-content">
      <div className="header">
        <div className="logo">
          <img
            className="mask-group-icon"
            loading="lazy"
            alt=""
            src="/mask-group.svg"
          />
          <h3 className="payrole">DataLeasing</h3>
        </div>
      </div>
      <div className="workspace">
        <div className="divider" />
        <div className="workspace1">
          <div className="rounded-rectangle" />
          <img className="dropbox-1-1-icon" alt="" src="/dropbox1-1.svg" />
          <img className="twilio-1-icon" alt="" src="/twilio-1.svg" />
          <div className="text-and-icon">
            <div className="text">
              <div className="dropbox">Dropbox</div>
            </div>
            <img
              className="icon-chevron-down"
              alt=""
              src="/icon--chevrondown.svg"
            />
          </div>
        </div>
        <div className="divider1" />
      </div>
      <div className="navigation">
        <div className="vertical-navigation">
          <div className="content">
            <img className="icon" alt="" src="/icon.svg" />
            <div className="text1">Home</div>
          </div>
        </div>
        <div className="vertical-navigation1">
          <div className="content1">
            <img className="icon1" alt="" src="/icon-1.svg" />
            <div className="text2">Contracts</div>
          </div>
        </div>
        <div className="vertical-navigation2">
          <div className="content2">
            <img className="icon2" alt="" src="/icon-2.svg" />
            <div className="text3">Documents</div>
          </div>
        </div>
        <div className="vertical-navigation3">
          <div className="content3">
            <img className="icon3" alt="" src="/icon-3.svg" />
            <div className="text4">Invoices</div>
          </div>
        </div>
        <div className="vertical-navigation4">
          <div className="content4">
            <img className="icon4" alt="" src="/icon-4.svg" />
            <div className="text5">Transactions</div>
          </div>
        </div>
        <div className="vertical-navigation5">
          <div className="content5">
            <img className="icon5" alt="" src="/icon-5.svg" />
            <div className="text6">Insurance</div>
          </div>
        </div>
        <div className="vertical-navigation6">
          <div className="content6">
            <img className="icon6" alt="" src="/icon-6.svg" />
            <div className="text7">Cards</div>
          </div>
        </div>
      </div>
      <div className="navigation1">
        <div className="vertical-navigation7">
          <div className="content7">
            <img className="icon7" alt="" src="/icon-7.svg" />
            <div className="text8">Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingContent;
