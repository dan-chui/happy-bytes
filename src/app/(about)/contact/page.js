import ContactForm from '@/src/components/Contact/ContactForm';
import LottieAnimation from '@/src/components/Contact/LottieAnimation';
import siteMetadata from '@/src/utils/siteMetaData';

export const metadata = {
  title: 'Contact Me',
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[60vh] border-b-2 border-solid border-dark dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="inline-block w-full h-full md:border-r-2 border-solid border-dark dark:border-light">
        <LottieAnimation />
      </div>
      <div className="w-full  flex flex-col items-center justify-center pb-8">
        <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl mb-4">
          Let's Connect!
        </h2>
        <p className="mb-2 italic">I look forward to hearing from you.</p>
        <ContactForm />
      </div>
    </section>
  );
}
