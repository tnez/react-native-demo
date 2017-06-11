import React from 'react'
import SBGStatusBar from './index'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<SBGStatusBar />).toJSON()
  expect(rendered).toBeTruthy()
})
