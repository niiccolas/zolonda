import React from "react";
import fakeEvent from "fake-event";

import { render, fireEvent, wait, store } from "../../../../tests/utils";
import Homepage from "components/Homepage/Homepage";

describe("<Homepage />", () => {
  beforeEach(() => {

  });

  it("renders without crashing", () => {
    render(<Homepage />);
  });
});
