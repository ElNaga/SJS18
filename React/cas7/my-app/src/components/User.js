import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'

import { useOutletContext } from "react-router-dom"

export const User = () => {



    const {id} = useParams()
    return(
        <div>
            User compoment  {id}

        

        </div>
    )
}