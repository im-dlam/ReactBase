import React, {useState} from 'react'


function MyComponent(){
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    })

    function handleYearChange(event){
        // toan tu spread de loai bo trung lap va lay gia tri moi, tranh mat object: make, model
        // setCar({...car, year: event.target.value});
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c => ({...car, make: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c => ({...car, model: event.target.value}))

    }

    return (<>
        <div>
            <p>Your like car : {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    </>)
}

export default MyComponent