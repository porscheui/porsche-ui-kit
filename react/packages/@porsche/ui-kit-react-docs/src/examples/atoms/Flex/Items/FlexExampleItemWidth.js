import React from "react"
import { Flex } from "@porsche/ui-kit-react"

const itemStyle = (color) => {
    return {
        height: "50px",
        backgroundColor: color,
        padding: "12px",
        color: "white"
    }
}

const FlexExampleItemWidth = () => {
    return (
        <Flex gap={12}>
            <Flex.Item>
                <div style={itemStyle("DeepSkyBlue")}>An element</div>
            </Flex.Item>
            <Flex.Item>
                <div style={itemStyle("DeepSkyBlue")}>An element with a little more text</div>
            </Flex.Item>
            <Flex.Item>
                <div style={itemStyle("DeepSkyBlue")}>An element</div>
            </Flex.Item>
            <Flex.Item>
                <div style={itemStyle("DeepSkyBlue")}>An element with more content</div>
            </Flex.Item>
        </Flex>
    )
}

export default FlexExampleItemWidth
