import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/2601.png"
          width="32"
          height="32"
          alt=""
        />
        Cloud Study Group!!
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f4a8.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
