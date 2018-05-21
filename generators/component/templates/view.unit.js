import * as React from 'react';
import { shallow } from 'enzyme';

import { <%= name %>ViewPlain as <%= name %>View } from './<%= name %>.view';

describe('Component::<%= name %>::view', function() {
  let props;

  beforeEach(function() {
    props = {}
  });

  function renderDoc(override = {}) {
    return shallow(<<%= name %>View {...props} {...override} />);
  }

  it('does not throw an error on render', function() {
    expect(renderDoc).not.to.throw(Error);
  });
});