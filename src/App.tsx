import { useState } from 'react';
import Section from "./components/Section";

const App: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <Section value={value} onChange={setValue} />
    </div>
  );
}

export default App;
