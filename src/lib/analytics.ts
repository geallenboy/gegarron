// Google Analytics 配置
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// 检查是否在生产环境且有GA ID
export const isProduction = process.env.NODE_ENV === 'production';
export const isAnalyticsEnabled = isProduction && GA_TRACKING_ID;

// GA4 事件类型
export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// 页面浏览事件
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// 自定义事件追踪
export const event = ({ action, category, label, value }: GAEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// 常用事件追踪函数
export const trackEvent = {
  // 项目点击
  projectClick: (projectName: string) => {
    event({
      action: 'click',
      category: 'Project',
      label: projectName,
    });
  },

  // 社交链接点击
  socialClick: (platform: string) => {
    event({
      action: 'click',
      category: 'Social',
      label: platform,
    });
  },

  // 技术栈点击
  techStackClick: (tech: string) => {
    event({
      action: 'click',
      category: 'TechStack',
      label: tech,
    });
  },

  // 联系方式点击
  contactClick: (method: string) => {
    event({
      action: 'click',
      category: 'Contact',
      label: method,
    });
  },

  // 博客文章点击
  blogClick: (title: string) => {
    event({
      action: 'click',
      category: 'Blog',
      label: title,
    });
  },

  // 页面停留时间
  timeOnPage: (seconds: number) => {
    event({
      action: 'time_on_page',
      category: 'Engagement',
      value: seconds,
    });
  },
};
