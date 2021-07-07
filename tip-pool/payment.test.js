describe("payment test", function() {
    beforeEach(function () {
        billAmtInput.value = 2000;
        tipAmtInput.value = 100;  
    });

    it('submitPaymentInfo',function() {
        submitPaymentInfo();
        expect(allPayments['payment1']['billAmt']).toEqual('2000');
        expect(allPayments['payment1']['tipAmt']).toEqual('100');
        expect(paymentId).toEqual(1);
    });

    it('createCurPayment',function() {
        var solution_ = {
            billAmt: '2000',
            tipAmt: '100',
            tipPercent: 5,
        };
        expect(createCurPayment()).toEqual(solution_);
    });

    it('appendPaymentTable',function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$2000');
        expect(curTdList[1].innerText).toEqual('$100');
        expect(curTdList[2].innerText).toEqual('5%');
    });

    it('updateSummary',function() {

    });


});