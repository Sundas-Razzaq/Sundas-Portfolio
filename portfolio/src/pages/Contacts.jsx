import PageIntro from '../components/PageIntro.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function Contacts() {
  return (
    <>
      <div className="container">
        <PageIntro crumb="contacts" subtitle="Let's talk" />
      </div>
      <ContactSection />
    </>
  );
}
