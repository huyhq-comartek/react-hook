import { memo, useState } from 'react';
import './style.scss'

function TwoWayBinding() {
    const [checked, setChecked] = useState([])
    const arr = [
        {
            name: 'Asus',
            id: 1
        }, 
        {
            name: 'Dell',
            id: 2
        }, 
        {
            name: 'MSI',
            id: 3
        }, 
    ];

    console.log(checked);

    const handleChange = (id) => {
        setChecked(prev => {
            if(prev.includes(id)) {
                const newArr = prev.filter(checkbox => {
                    return checkbox !== id;
                })
                return newArr;
            }
            return [...prev, id];
        })
    }

    return (
        <>
            {
                arr.map(checkbox => {
                    return <div key={checkbox.id}>
                        <input 
                            onChange={()=>handleChange(checkbox.id)} 
                            type='checkbox'
                            checked={checked.includes(checkbox.id)}
                        />
                        <label>{checkbox.name}</label>
                    </div>
                })
                
            }
        </>
    )
}

export default memo(TwoWayBinding);