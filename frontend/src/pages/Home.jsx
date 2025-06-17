import Hero from "../components/Hero";
import NavBarBuyer from "../components/NavBarBuyer.jsx";
import Assurances from "../components/Assurances.jsx";
import Category from "../components/Category.jsx";
import Recommendations from "../components/Recommendations.jsx";
import UserFotter from "../components/UserFotter.jsx";
export default function Home() {
  //   useEffect(() => {}, []);
  // const res = fetch("http://localhost:8000/api/product/getProductFiltered",);
  return (
    <>
      <NavBarBuyer />
      <Hero />
      <Assurances />
      <Category />
      <Recommendations recommendations={"getTopDiscounts"} />
      <Recommendations recommendations={"getNewArrivals"} />
      <UserFotter />
    </>
  );
}
