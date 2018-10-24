import Types from "./Types"
import EdgeCases from "./EdgeCases"

import { Input } from "@porsche/ui-kit-react"
import { storiesOf, TYPE } from "src/app/stories"

storiesOf(TYPE.MOLECULE, Input, [], module)
    .add(Types)
    .add(EdgeCases)
