import Hero from "../components/HomeComponents/Hero";
import RecentProjects from "../components/HomeComponents/RecentProjects";
import Service from "../components/HomeComponents/Service";
import TechStack from "../components/HomeComponents/TechStack";

const Home = () => {
    return (
        <>
            <Hero />
            <Service />
            <RecentProjects />
            <TechStack />
        </>
    )
}

export default Home;