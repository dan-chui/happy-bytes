import ContactForm from '@/src/components/Contact/ContactForm';
import LottieAnimation from '@/src/components/Contact/LottieAnimation';
import siteMetadata from '@/src/utils/siteMetaData';

export const metadata = {
  title: 'Contact Me',
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="w-full h-auto border-b-2 border-solid border-dark dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="inline-block w-full h-full md:border-r-2 border-solid border-dark dark:border-light">
        <LottieAnimation />
      </div>
      <div className="w-full  flex flex-col items-center justify-center pb-8">
        <h2 className="font-bold capitalize text-2xl sm:text-3xl lg:text-4xl mb-4">
          Let's Connect!
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
