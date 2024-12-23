import FirstHeader from "./components/FirstHeader";
import SecondHeader from "./components/SecondHeader";
import ThirdHeader from "./components/ThirdHeader";
import PropertySlider from "./components/PropertySlider";
import SearchBox from "./components/SearchBox";
import PropertyListing from "./components/PropertyListing";
import AgentsSlider from "./components/AgentsSlider";
import PropertyExplorer from "./components/ExploreProperty";
import MobileAppPromo from "./components/MobileAppPromo";
import ClientsSlider from "./components/ClientsSlider";
import NewsletterSection from "./components/NewsletterSection";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
function App() {
  return (
    <div>
      <FirstHeader />
      <SecondHeader/>
      <ThirdHeader/>
      <PropertySlider/>
      <SearchBox/>
      <PropertyListing/>
      <AgentsSlider/>
      <PropertyExplorer/>
      <MobileAppPromo/>
      <ClientsSlider/>
      <NewsletterSection/>
      <Footer1/>
      <Footer2/>
    </div>
  );
}

export default App;
