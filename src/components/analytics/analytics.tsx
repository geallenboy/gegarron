import OpenPanelAnalytics from './open-panel-analytics'

export const Analytics = () => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      <OpenPanelAnalytics />
    </>
  )
}
