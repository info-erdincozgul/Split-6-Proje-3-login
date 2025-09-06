import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function ErrorPage() {
  const history = useHistory();

  return (
    <div className="error-container">
      <h2>Error in login, please try again.</h2>
      <Button color="primary" onClick={() => history.push('/')}>
        Try Again
      </Button>
    </div>
  );
}
