/**
 * Google Search Console 验证组件
 * 用于在网站头部添加验证meta标签
 */
export const GoogleSearchConsole = () => {
  const verificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

  if (!verificationCode) {
    return null
  }

  return (
    <meta 
      name="google-site-verification" 
      content={verificationCode} 
    />
  )
}

export default GoogleSearchConsole 