import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'nextjs-plugin-graphql',
  description: 'A webpack plugin for preprocessing GraphQL Documents '
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
