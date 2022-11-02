const hobbies = require('../hobbies');
describe("API unit test suite", () => {
    describe("getHobbies", () => {
        const list = hobbies.getHobbies();
        it("returns 5 hobbies", () => {
            expect(list.length).toEqual(5);
        });
        it("returns 'jogging' as first hobby", () => {
            expect(list[0]).toBe("jogging");
        });
        it("returns hobbies starting with 'd'", () => {
            expect(list).toContain("diving");
        });
        it("returns hobbies with length 7", () => {
            expect(list).toContain("cooking");
            expect(list).toContain("jogging");
            expect(list).toContain("reading");
        });
    })

})