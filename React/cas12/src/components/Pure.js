import { memo } from "react"


export const Pure = memo(
    ({isAvailable}) => {

    console.log('Pure')
    return (
        <div>
            <p>isAvailable : {isAvailable ? 'yes' : 'no'}</p>
        </div>
    )
})