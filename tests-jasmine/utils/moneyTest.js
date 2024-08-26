import { formatCurrency } from "../../scripts/utils/money.js";


describe("test suite: formatCurrency", () => {
    it("Converts Cents into dollars", () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it("Works with zeros", () => {
        expect(formatCurrency(0)).toEqual("0.00");
    });
    it("Rounds up to the nearest cent", () => {
        expect(formatCurrency(2000.5)).toEqual("20.01");
    });
})
