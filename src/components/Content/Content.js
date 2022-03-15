import './Content.scss'
import Memo from './Memo'
import UseRef from './UseRef';
import TwoWayBinding from './TwoWayBinding';
import {useCallback, useState} from 'react'

function Content() {
    const [times, setTimes] = useState(0);

    const handleIncrease = useCallback(() => {
        setTimes(prev => prev + 1);
    }, [])

    return (
        <div className='content'>
            <section>
                <h1 className='title'>memo, useCallback</h1>
                <h1>Re-render times: {times}</h1>
                <Memo onIncrease={handleIncrease}/>
            </section>

            {/* <hr/> */}

            <section>
                <h1 className='title'>useRef</h1>
                <UseRef />
            </section>

            <section>
                <h1 className='title'>Two-Way Binding</h1>
                <TwoWayBinding />
            </section>
        </div>
        
    )
}

export default Content;