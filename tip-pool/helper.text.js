describe("Helpers test", function() {
   it('should test if sumPaymentTotal can sum the payment', function(){
        allPayments['payment1'] = {
            billAmt: 10,
            tipAmt: 1,
            tipPercent: 10,
        };
        allPayments['payment2'] = {
            billAmt: 20,
            tipAmt: 2,
            tipPercent: 10,
        };
        expect(sumPaymentTotal('tipAmt')).toEqual(3);
        expect(sumPaymentTotal('billAmt')).toEqual(30);
   });
   
   it('should test if calculateTipPercent can get right percentage',function(){
        allPayments['payment1'] = {
            billAmt: 10,
            tipAmt: 1,
            tipPercent: 10,
        };
        expect(calculateTipPercent(allPayments['payment1']['billAmt'],allPayments['payment1']['tipAmt'])).toEqual(10);
   });
    
    it('should test if appendTd append new td into table', function () {
        const newTr = document.createElement('tr');
        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    
    });
});

afterEach(function () {
    allPayments = {};
})