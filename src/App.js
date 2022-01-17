
import Header from "./components/Header";
import Subtitle from './components/Subtitle';
import Artwork  from './components/Artwork';
import Seller from './components/Seller'
import Explore from "./components/Explore";
import Guide from './components/Guide'
import Popular from './components/Popular'
import Collection from './components/Collection'
import Start from './components/Start'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Subtitle/>
      <Artwork/>
      <Seller/>
      <Explore/>
      <Guide/>
      <Popular/>
      <Collection/>
      <Start/>
      <Footer/>
    </div>
  );
}

export default App;
