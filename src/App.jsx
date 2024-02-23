import { Fragment } from 'react'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

import ModeToggle from './components/ModeToggle'

function App() {
    return (
        <Fragment>
            <ModeToggle />
            <div>riverdevweb</div>
            <Button variant="contained">Hello world</Button>
            <AccessAlarmIcon color={'action'} />
        </Fragment>
    )
}

export default App
