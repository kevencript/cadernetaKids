import React, { Component } from "react";
import FirstSection from "./sections/firstSection/index";
import SecondSection from "./sections/secondSection/index";
import ThirdSection from "./sections/thirdSection/index";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    );
  }
}
