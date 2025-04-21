import { expect } from "chai";
import { Library } from "../services/Library";

describe("Library<T>", () => {
  it("додає елемент", () => {
    const lib = new Library<{ title: string }>();
    lib.add({ title: "Test" });
    expect(lib.findByTitle("Test")?.title).to.equal("Test");
  });
});
