import { useState, useEffect} from 'react'
import './App.css'
import axios from 'axios' ;

// https://api.api-ninjas.com/v1/facts?limit=
//
// API KEY: k593sGEeTPYV/Y+feUo6RQ==0r3qGBSw4ncEszyn

function App() {
  const [count, setCount] = useState(0)
  const [facts, setFacts] = useState([]);
    console.log(count);



    async function fetchData(){
      try{
          const response = await
              axios.get('https://api.api-ninjas.com/v1/facts?limit=1', {
                  headers: {
                      'X-Api-Key': 'k593sGEeTPYV/Y+feUo6RQ==0r3qGBSw4ncEszyn'
                  }
              });
        setFacts(response.data);
      } catch(error){
          console.log(error);
      }
    }

        useEffect(()=>{
            if (count == 3) {
            fetchData();
            console.log('groter dan 3');
            } else {
                setFacts([]);
                ;
            }
           },[count]);

    return (
    <>

      <h1>Time Spirit</h1>
        <div>{facts.map((el,i) =>
             {
            return (
                <div key={i}>
                    {el.fact}
                </div>
            );
        })}</div>

        {/*<button type="button" onClick={fetchData}> Klik hier!*/}
        {/*</button>*/}


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count to {count}
        </button>

        <p>
          click button to count
        </p>

      </div>
    </>
  )
}

export default App
