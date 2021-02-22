import _extends from "@babel/runtime/helpers/esm/extends";

/**
 * Progress Bar
 */
// React
import React from 'react';
import { number, string, bool, oneOf } from 'prop-types'; // UI

import { THEME_CONTEXT } from '../../../theme/constants/context';
import { ProgressBarDiv } from '../../../';
export var ProgressBar = function ProgressBar(props) {
  return /*#__PURE__*/React.createElement(ProgressBarDiv, _extends({
    "aria-valuenow": props.now,
    "aria-valuemin": props.ariaValueMin,
    "aria-valuemax": props.ariaValueMax
  }, props));
};
ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = {
  animated: bool,
  ariaValueMax: number,
  ariaValueMin: number,
  bgImage: string,
  bgSize: string,
  color: string,
  context: oneOf(Object.values(THEME_CONTEXT)),
  now: number,
  role: string,
  striped: bool,
  transition: string
};
ProgressBar.defaultProps = {
  animated: false,
  ariaValueMax: 100,
  ariaValueMin: 0,
  now: 0,
  striped: false
};
//# sourceMappingURL=progressBar.js.map