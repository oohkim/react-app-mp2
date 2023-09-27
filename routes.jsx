import Hero from './components/Hero/Hero';
import Schedule from './pages/Schedule/Schedule';

const routes = [
    {
        path: "/",
        element: <Hero />,
    },
    {
        path: "/schedule",
        element: <Schedule />
    }
]

export default routes;