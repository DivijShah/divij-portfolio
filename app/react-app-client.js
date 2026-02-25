'use client';

import dynamic from 'next/dynamic';

const ReactApp = dynamic(() => import('./react-app'), {
  ssr: false,
});

export default function ReactAppClient() {
  return <ReactApp />;
}
