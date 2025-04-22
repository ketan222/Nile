import Hero from '../components/Hero';
import  NavBarBuyer from '../components/NavBarBuyer.jsx';
import  Assurances from '../components/Assurances.jsx';
import  Category from '../components/Category.jsx';
import  Recommendations from '../components/Recommendations.jsx';
import  UserFotter from '../components/UserFotter.jsx';
export default function Home(){
    return (
    <>
        <NavBarBuyer/>
        <Hero/>
        <Assurances/>
        <Category/>
        <Recommendations/>
        <Recommendations/>
        <Recommendations/>
        <UserFotter/>
    </>
    )
}