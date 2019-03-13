import * as React from "react"
import { RadioProps, Radio } from "./Radio"
import { mount, ReactWrapper } from "enzyme"

describe("Radio", () => {
    const createComponent = (props: RadioProps): ReactWrapper => {
        return mount(<Radio {...props} />)
    }

    describe("default state", () => {
        it("sets all pass through properties on the input", () => {
            // arrange
            const props = {
                name: "radiotest",
                value: "test"
            }

            // act
            const component = createComponent(props)

            // assert
            const input = component.find("input")
            expect(input.prop("checked")).toBe(undefined)
            expect(input.prop("name")).toBe("radiotest")
            expect(input.prop("value")).toBe("test")
        })
    })

    describe("onChange", () => {
        it("is called with the value of the input on change", () => {
            // arrange
            const onChange = jest.fn()
            const props = {
                name: "radiotest",
                onChange,
                value: "test"
            }

            // act
            const component = createComponent(props)
            const input = component.find("input")

            input.simulate("change")

            // assert
            expect(onChange).toHaveBeenCalledWith("test", expect.anything(), expect.anything())
        })
    })
})
