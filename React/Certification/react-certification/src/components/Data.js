import React,{useState, useEffect} from 'react'
import withLoading from './WithLoading';



const DataComponent = ({ data }) => {
    return (
      <div>
        <h2>Data Loaded:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
  
  const DataComponentWithLoading = withLoading(DataComponent);
function Data() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    
    useEffect(() => {
        // Simulate a data fetch with a delay
        setTimeout(() => {
          setData({ name: 'John Doe', age: 30, city: 'New York' });
          setIsLoading(false);
        }, 2000);
      }, []);
    
      
  return (
    <div className="App">
    <h1>React HOC Example</h1>
    <DataComponentWithLoading isLoading={isLoading} data={data} />
  </div>
  )
}

export default Data