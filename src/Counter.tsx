// Les imports : les hooks, le css etc ..
import { useState, useEffect } from 'react'

// Composant de type Counter 
// Ce composant possède un state qui est le compte 
// Le state est une donnée amenée à changer dynamiquement au sein d'un composant 

// A ne pas confondre avec les props -> données qui circulent de composant parent vers composant enfant   
function Counter() {
    // 1 - On trouve ici la gestion des states / états -> données du composant
   const [count, setCount] = useState(0) 

   // useEffect vient déclencher du code en fonction du tableau de dépendance 


    // 2 - Les opérations -> les fonctions liées au composant
    function increment() {
        setCount(count => count + 1)
    }

    console.log("après render : " + count)

    // 3 - Le JSX à savoir la vue du composant 
    return (
        <>
            <button onClick={() => increment()}>+</button>
            <p className="">Compte : { count }</p>
        </>
    )     
}

export default Counter