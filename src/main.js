import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

const analytics = Analytics({
  app: 'GHPages-sk337',
  plugins: [
    googleTagManager({
      containerId: 'G-EWV71796EL'
    })
  ]
})

/* Track a page view */
analytics.page()