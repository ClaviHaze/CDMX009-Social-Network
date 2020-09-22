import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Router, withRouter, BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, act, wait } from "@testing-library/react";
import useDataFetch from "./useDataFetch.js";