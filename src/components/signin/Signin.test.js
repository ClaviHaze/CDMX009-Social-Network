import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Router, withRouter, BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, act, wait } from "@testing-library/react";
import Signin from "./Signin";

test("should render main logo ", () => {
  const history = createMemoryHistory();
  const { getByAltText } = render(
    <Router history={history}>
      <Signin />
    </Router>
  );
  const title = getByAltText("title");
  expect(title).toHaveAttribute("src", "memingos.png");
});

test("should render placeholder", () => {
  const { getByPlaceholderText } = render(
    <BrowserRouter>
      <Signin />
    </BrowserRouter>
  );
  const input = getByPlaceholderText("Email");
  expect(input).toBeInTheDocument();
  expect(input.type).toBe("email");
});

test("should have an email and the click functions", async () => {
  expect.assertions(5);

  let { getByTestId } = render(
    <BrowserRouter>
      <Signin />
    </BrowserRouter>
  );
  let input = getByTestId("email");
  let erroMsg;
  let btnLogin = getByTestId("btn-login");

  expect(input).toBeInTheDocument();
  expect(input.value).toBe("");
  try {
    erroMsg = getByTestId("error-msg");
  } catch (e) {
    expect(true).toBe(true);
  }

  fireEvent.change(input, { target: { value: "un@email.com" } });
  input = getByTestId("email");
  expect(input.value).toBe("un@email.com");

  fireEvent.click(btnLogin);
  await wait(() => (erroMsg = getByTestId("error-msg")));

  expect(erroMsg.innerHTML).toBe(
    "La contraseña es incorrecta o el usuario no tiene password"
  );
});
