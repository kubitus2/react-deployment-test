import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router basename="/react-deployment-test">
      <Route path="/" Component={App} />
    </Router>
  );
};

export default Routes;
