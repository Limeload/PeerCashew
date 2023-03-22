import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import investing from '../images/investing.png';

function InvestmentPage({user, onLogIn, onLogOut}) {
  return (
    <div>
      <NavigationBar user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
<Container className="my-5">
      <h1>Start Investing Today!</h1>
      <p>Ready to put your money to work? Click the button below to get started.</p>
      <Button as={Link} to="/investmentForm" variant="dark">Get Started</Button>
    </Container>
    <img className='investment-image' src={investing} alt={investing} />
    <Footer />
    </div>

  );
}

export default InvestmentPage;
