'use client';

import { GoogleAnalytics as GA } from '@next/third-parties/google';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, GA_TRACKING_ID, isAnalyticsEnabled } from '@/lib/analytics';

/**
 * Google Analytics 4 组件
 * 使用 @next/third-parties/google 包
 */
export const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 页面路由变化时追踪页面浏览
  useEffect(() => {
    if (isAnalyticsEnabled) {
      const url = pathname + searchParams.toString();
      pageview(url);
    }
  }, [pathname, searchParams]);

  // 如果不是生产环境或没有GA ID，不渲染
  if (!isAnalyticsEnabled) {
    return null;
  }

  return <GA gaId={GA_TRACKING_ID} />;
};

export default GoogleAnalytics;
