
import { FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ValueProps = {
    icon: IconProp
    value: string | number | undefined
}

const Data: FC<ValueProps> = ({ icon, value }) => {
    return <><FontAwesomeIcon icon={icon} /> {value ?? 'n.a.'}</>
}

export default Data