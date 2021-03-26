import "./Applet.css"

import { useState, useCallback } from 'react';
const banks = [{
    id: 1,
    name: 'National Commercial Bank',
    interest: 11.2,
    monthly: 2000,
    final: 100000,
    total: 100000,
    image: 'ahly.png',
    selected: false
}, {
    id: 2,
    name: 'The Saudi British Bank (SABB)',
    interest: 10.2,
    monthly: 2200,
    final: 900000,
    total: 100000,
    image: 'alinma.png',
    selected: false
}, {
    id: 3,
    name: 'Saudi Investment Bank',
    interest: 10,
    monthly: 2300,
    final: 100000,
    total: 100000,
    image: 'saab.png',
    selected: false
}, {
    id: 4,
    name: 'Alinma Bank',
    interest: 10,
    monthly: 2500,
    final: 100000,
    total: 100000,
    image: 'saudi-french.png',
    selected: false
}, {
    id: 5,
    name: 'Banque Saudi Fransi',
    interest: 10,
    monthly: 2100,
    final: 400000,
    total: 100000,
    image: 'saudi.png',
    selected: false
},{
    id: 6,
    name: 'Riyad Bank',
    interest: 10,
    monthly: 2100,
    final: 400000,
    total: 100000,
    image: 'saudi.png',
    selected: false
}
];

const Sort = ({ onSelect }) => <select onChange={onSelect}>
  <option value="interest">lowest Interest Rate</option>
  <option value="monthly">Lowest Monthly</option>
  <option value="final">Lowest Final</option>
</select>

const limitToTwo = (arr) => arr.length > 2 ? [arr[0], arr[1]] : arr

export const Applet = ({ Bank }) => {
    const [selected, setSelected] = useState([]);
    const [sort, setSort] = useState('interest');
    const onSort = (e) => {
        setSort(e.target.value);
    }
    const onSelect = (id) => {
        if(selected.includes(id)) {
            setSelected(selected.filter(x => x !== id))
        } else {
            setSelected([...limitToTwo(selected), id])
        }
    }
    return (<div className="offset-lg-3 col-md-6 applets">
        <span className="filter">Filter by:</span> <Sort onSelect={onSort}/>
        {banks.sort((a, b) => a[sort] - b[sort]).map(({id, ...rest}) => <Bank onClick={() => onSelect(id)} selectedIndex={selected.indexOf(id)} key={id} {...rest} />)}
        <button  href="" target="_blank" class="Apply-financing col-md-4">Apply for financing</button>
    </div>)
  
}