import cn from "./class-names";



describe("ClassNames", () => {
  it("should combie class names array into a string", () => {
    expect(cn("FirstClass", "SecondClass")).toBe("FirstClass SecondClass");
  });

  it("should skip empty and undefined class names", () => {
    expect(cn("FirstClass", null, "SecondClass", "", "ThirdClass")).toBe("FirstClass SecondClass ThirdClass");
  });
});
