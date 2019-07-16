import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) =>{
        const ninjaList = ninjas.map(ninja => {
            if(ninja.age > 20){
                return (
                    <div key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick = {() => deleteNinja(ninja.id)}>Delete me</button>
                    </div>
                )
            } else {
                return null;
            }
        })
        return(
            <div className="ninjas">
                {ninjaList}
            </div>
        )
}

export default Ninjas;