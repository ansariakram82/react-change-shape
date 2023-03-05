import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ChangeColor from "../ChangeColor/ChangeColor";
import ChangeShape from "../ChangeShape/ChangeShape";

export default function Home() {
  return (
    <div className="home">
      <div className="my-tabs">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Change Color">
            <ChangeColor />
          </Tab>
          <Tab eventKey="profile" title="Change Shape">
            <ChangeShape />
          </Tab>
          <Tab eventKey="contact" title="Coming Soon" disabled></Tab>
        </Tabs>
      </div>
    </div>
  );
}
