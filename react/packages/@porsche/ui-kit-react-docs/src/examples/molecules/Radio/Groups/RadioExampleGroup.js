import React from "react"
import { Radio } from "@porsche/ui-kit-react"

const RadioExampleGroups = () => {
    return (
        <Radio.Group name="radiogroup">
            <Radio value="radio 1" checked={true}>
                Radio 1
            </Radio>
            <Radio value="radio 2">Radio 2</Radio>
            <Radio value="radio 3">Radio 3</Radio>
            <Radio value="radio 4">Radio 4</Radio>
        </Radio.Group>
    )
}

export default RadioExampleGroups
