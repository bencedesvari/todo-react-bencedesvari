const mode = require("./mode")
// @ponicode
describe("mode.getNextModeByKey", () => {
    test("0", () => {
        let callFunction = () => {
            mode.getNextModeByKey("MODE_NONE", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mode.getNextModeByKey("MODE_NONE", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mode.getNextModeByKey("MODE_NONE", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mode.getNextModeByKey(1, "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mode.getNextModeByKey(-100, "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mode.getNextModeByKey(-Infinity, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
