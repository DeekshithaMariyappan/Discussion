import './css/Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
	const handleLogout = () => {
        setIsLoggedIn(false); 
      };
  return (
    <div className="home-container">
      <div className="glass-container">
        <p>
          Welcome to the Community Forum, a place where residents can connect,
          share ideas, and support each other. This platform allows you to raise
          requests, express your opinions, and engage in discussions with fellow
          community members. We believe in fostering a sense of community and
          collaboration. Feel free to explore the forum, like and contribute to
          requests, and be an active participant in shaping our community.
        </p>
      </div>
      <div className="button-container">
        <button className="btn"><Link to='/search' className="link">Search Topics</Link></button>
		<button  className="btn"><Link to='/' className="link" onClick={handleLogout}>Logout</Link></button>
      </div>
    </div>
  );
};

export default Home;
