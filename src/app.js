

import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";

import { remote } from "electron";
import jetpack from "fs-jetpack";
import env from "env";
import React from 'react'
import { render } from 'react-dom'


render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);