describe("Test Fit Person", () => {
  it("should buy healthly products", () => {
    const fitPerson = new FitPerson("John Doe");
    const healthlyProduct = new Broccoli();
    fitPerson.buy(healthlyProduct);
    expect(fitPerson.boughtedProducts).toContain(healthlyProduct);
  });
});
