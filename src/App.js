import React from 'react'
import BelajarStateless from './Component/BelajarStateless'
import BelajarStateFull from './Component/BelajarStateFull'
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <BelajarStateless />
        <BelajarStateFull />
      </div>
    );
  }
}
export default App