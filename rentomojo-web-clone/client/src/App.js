
import './App.css';
import RentoMain from './Components/RentoMain';
import {AuthContextProvider} from "./Components/AuthContext"
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <RentoMain />
      </AuthContextProvider>
    </div>
  );
}

export default App;
