
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 10,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('13.22');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 1059.5,
    years: 10,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('14.00');
});

/// etc
