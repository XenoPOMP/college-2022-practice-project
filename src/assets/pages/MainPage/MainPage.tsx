import Page from '../../components/Page/Page';
import BannerSection from '../../sections/BannerSection/BannerSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import FactsSection from '../../sections/FactsSection/FactsSection';
import KeyFeaturesSection from '../../sections/KeyFeaturesSection/KeyFeaturesSection';
import WeBelieveSection from '../../sections/WeBelieveSection/WeBelieveSection';
import EarningSinceSection from '../../sections/EarningSinceSection/EarningSinceSection';
import ReviewSection from '../../sections/ReviewSection/ReviewSection';
import ContactSection from '../../sections/ContactSection/ContactSection';

const MainPage = () => {
  return (
    <Page meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}>
      <BannerSection />

      <FactsSection />

      <AboutSection />

      <KeyFeaturesSection />

      <WeBelieveSection />

      <EarningSinceSection />

      <ReviewSection />
      <ContactSection />
    </Page>
  );
};

export default MainPage;
