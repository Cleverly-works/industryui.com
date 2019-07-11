/**
 * Google Analytics
 */
import React from 'react'
import PropTypes from 'prop-types'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const GoogleAnalyticsPageView = (url, id) => {
  window.gtag('config', id, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

// function getGaScript (siteId) {
//   return `
//     (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
//     function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
//     e=o.createElement(i);r=o.getElementsByTagName(i)[0];
//     e.src='https://www.google-analytics.com/analytics.js';
//     r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
//     ga('create','${siteId}','auto');ga('send','pageview');
//   `
// }

// function Tracking (props) {
//   return (
//     <div>
//       <script dangerouslySetInnerHTML={{ __html: getGaScript(props.siteId) }} />
//     </div>
//   )
// }

// Tracking.propTypes = {
//   siteId: PropTypes.string.isRequired
// }

// export default Tracking
