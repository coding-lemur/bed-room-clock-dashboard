
import { FC } from 'react'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ValueProps = {
    icon: IconProp
    value: string | number | undefined
    unit?: string
}

const Data: FC<ValueProps> = ({ icon, value, unit }) => {
    return <>
        <FontAwesomeIcon icon={icon} /> {value ?? 'n.a.'}
        {value !== undefined &&
            <>{unit}</>
        }
    </>
}

export default Data