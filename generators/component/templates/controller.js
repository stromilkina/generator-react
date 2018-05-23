// @flow
import * as React from 'react';

import { <%= name %>View, type <%= name %>ViewProps } from './<%= name %>.view';

export type <%= name %>ControllerProps = {};
type <%= name %>ControllerState = null;

/**
 * Controller for <%= name %> component.
 *
 * @extends React.PureComponent
 */
export class <%= name %>Controller extends React.PureComponent<<%= name %>ControllerProps, <%= name %>ControllerState> {
  // Uncomment default props if need
  // static defaultProps = {};

  /**
   * Method to generate properties for view part of component.
   *
   * @return {<%= name %>ViewProps} Props for view part of component.
   */
  getViewProps(): $Exact<<%= name %>ViewProps> {
    return {};
  }


  /**
   * React's method to render component.
   *
   * Does not render something except component's view part.
   *
   * @return {?React.Node} View part of <%= name %> or possible `null`.
   */
  render() {
    return React.createElement(<%= name %>View, this.getViewProps);
  }
}
