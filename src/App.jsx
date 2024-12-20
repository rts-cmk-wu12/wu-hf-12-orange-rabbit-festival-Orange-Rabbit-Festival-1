import { useRoutes } from 'react-router';
import routes from '~react-pages';
import { ParticipantsProvider } from './context/ParticipantsContext';
 
function App() {
  return (
    <ParticipantsProvider>
      {useRoutes(routes)}
    </ParticipantsProvider>
  );
}
 
export default App;
 
 
