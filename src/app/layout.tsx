export const metadata = {
  title: 'Word Game',
  description: 'Enhance your vocabulary skills'
};

import '../styles/globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
