import { ShowCaseHouse } from "../sections/showcasehouse"
import { AboutSection } from "../sections/aboutsection"
import { ContactForm } from "../sections/contact"


export const Home = () => {
    return (
        <>
            <ShowCaseHouse />
            <AboutSection />
            <ContactForm />
        </>
    )
}