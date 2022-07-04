import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

import ImagesList from "../images/ImagesList";
import FavoriteImageList from "../favoriteImages/FavoriteImageList";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      // <div>
      //   <Row>
      //     <Col xs="3">
      //       <CategoryList></CategoryList>
      //     </Col>
      //     <Col xs="9">
      //       <ImagesList></ImagesList>
      //     </Col>
      //   </Row>
      // </div>

      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              İmages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Favorite Images
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ImagesList></ImagesList>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <FavoriteImageList></FavoriteImageList>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
