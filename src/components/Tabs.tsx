import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ShortenLinkForm from "./FormComponent";

const TabsComponent = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        <h2>Shorten a long link</h2>
        <ShortenLinkForm></ShortenLinkForm>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;
