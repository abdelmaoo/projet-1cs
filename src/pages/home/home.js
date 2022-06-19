import Announcement from '../../components/announcement/announcement'; 
import Categories from '../../components/categories/categories'
import Products from '../../components/products/products'
import Newsletter from '../../components/newsletter/newsletter'
import Footer from '../../components/footer/footer'


import './home.css';
import Slider from '../../components/slider/slider';
import Pageone from '../../projet/page1/Pageone';
import Pagetwo from '../../projet/page2/Ville';
import Aboutville from '../../projet/page2/aboutville';
import Activities from '../../projet/page2/activities';
import Footer1 from '../../projet/page2/Footer';
import VilleDetails from '../../projet/page2/villedetails';
import Navbar from '../../projet/page1/Navbar';

function Home() {
  return (
<div className='homeContainer'>

  <Pageone />
  <Pagetwo />
  <Aboutville />
  <Activities />
  <Footer1 />
  <VilleDetails />

</div>
  );
}

export default Home;
