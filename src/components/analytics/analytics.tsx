import GoogleAnalytics from './google-analytics';

export const Analytics = () => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <GoogleAnalytics />
    </>
  );
};
