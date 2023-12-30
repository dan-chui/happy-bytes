import AboutCoverSection from '@/src/components/About/AboutCoverSection';
import Skills from '@/src/components/About/Skills';

export const metadata = {
  title: 'About Me',
  description: `Here are some details about me.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
    </>
  );
}
