import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="toolbar toolbar-header luoo-header">
        <h1 className="title">luoo.net 落网</h1>

        <div className="toolbar-actions">
          <div className="btn-group">
            <button className="btn btn-default">
              <span className="icon icon-fast-backward"></span>
            </button>
            <button className="btn btn-default">
              <span className="icon icon-play"></span>
            </button>
            <button className="btn btn-default">
              <span className="icon icon-fast-forward"></span>
            </button>
          </div>

          <button className="btn btn-default">
            <span className="icon icon-home icon-text"></span>
            Filters
        </button>

          <button className="btn btn-default btn-dropdown pull-right">
            <span className="icon icon-megaphone"></span>
          </button>
        </div>
      </header>
    );
  }
}

export default Header;