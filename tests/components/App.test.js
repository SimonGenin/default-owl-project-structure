import { App } from "../../src/components/App";
import { makeTestFixture, nextTick, click } from "../helpers";

let fixture;

beforeEach(() => {
  fixture = makeTestFixture();
});

afterEach(() => {
  fixture.remove();
});

describe("App", () => {
  test("Works as expected...", async () => {
    const app = new App();
    await app.mount(fixture);
    expect(fixture.innerHTML).toBe("<div>Hello Owl</div>");

    click(fixture, "div");
    await nextTick();
    expect(fixture.innerHTML).toBe("<div>Hello World</div>");
  });
});