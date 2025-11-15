import LandingPageApp from './landing-page/src/App'
import landingPageStyles from './landing-page/src/index.css?raw'

function LandingPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: landingPageStyles }} />
      <LandingPageApp />
    </>
  )
}

export default LandingPage
