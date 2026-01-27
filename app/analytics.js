'use client'

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function AnalyticsWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <Analytics />;
}
