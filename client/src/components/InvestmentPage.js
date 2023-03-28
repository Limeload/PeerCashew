import { Container } from 'react-bootstrap';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import investing from '../images/investing.png';
import LoanRequest from './LoanRequests';

function InvestmentPage({user, onLogIn, onLogOut}) {
  return (
    <div>
      <NavigationBar user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
<Container className="my-5">
      <h1>Start Investing Today!</h1>
      <p>Ready to put your money to work? Click the button below to get started.</p>
    </Container>
    <img className='investment-image' src={investing} alt={investing} />
    <LoanRequest user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
    <br />
    <Footer />
    </div>

  );
}

export default InvestmentPage;
