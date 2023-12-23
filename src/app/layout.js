import { cx } from '@/src/utils';
import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import Header from '@/src/components/header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr',
});

export const metadata = {
  title: 'Happy Bytes',
  description:
    'Blog website featuring news, opinions, and technical information about web development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(inter.variable, manrope.variable, 'font-mr bg-light')}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
