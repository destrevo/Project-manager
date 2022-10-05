import './App.css';
import { useEffect, useContext, useState } from 'react';
import { ProjectMaganer } from './Context/Context';
import Main from './Components/Main/Main';

function App() {
  const [pending, setPending] = useState(false)
  const { dataFromServer, setDataFromServer } = useContext(ProjectMaganer)
  //onload [] empty dependency array
  useEffect(() => {
    let isMounted = true
    if(isMounted) {
      (async () => {
        setPending(true)
        const response = await fetch('/data.json')
        const data = await response.json()
        setTimeout(() => {
          setDataFromServer(data)
          setPending(false)
        }, [2000])
      })()
    }
    return () => {
      isMounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="App">
      {pending && <div className="lds-dual-ring"/>}
      {dataFromServer.length > 0 && <Main />}
    </div>
  );
}

export default App;
