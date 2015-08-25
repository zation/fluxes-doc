module.exports = [{
  path: '/',
  text: 'Getting Started',
  markdown: require('raw!../documents/getting-started.md')
}, {
  path: '/components/link',
  text: 'Link',
  markdown: require('raw!../documents/link.md'),
  context: {
    Link: require('fluxes/components/link.jsx')
  }
}, {
  path: '/components/back-button',
  text: 'Back Button',
  markdown: require('raw!../documents/back-button.md'),
  context: {
    BackButton: require('fluxes/components/back-button.jsx')
  }
}, {
  path: '/components/modal',
  text: 'Modal',
  markdown: require('raw!../documents/modal.md'),
  context: {
    Modal: require('fluxes/components/modal.jsx')
  }
}, {
  path: '/components/confirmation',
  text: 'Confirmation',
  markdown: require('raw!../documents/confirmation.md'),
  context: {
    Confirmation: require('fluxes/components/confirmation.jsx'),
    ConfirmationAction: require('fluxes/actions/confirmation')
  }
}, {
  path: '/components/feedback-button',
  text: 'Feedback Button',
  markdown: require('raw!../documents/feedback-button.md'),
  context: {
    FeedbackButton: require('fluxes/components/feedback-button.jsx')
  }
}, {
  path: '/components/switcher',
  text: 'Switcher',
  markdown: require('raw!../documents/switcher.md'),
  context: {
    Switcher: require('fluxes/components/switcher.jsx')
  }
}];
