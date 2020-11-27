import React from 'react'
import {shallow} from 'enzyme'
import LoginForm from '../../components/LoginForm'

test('should render component correctly',()=>{
  const wrapper = shallow(<LoginForm />)
  expect(wrapper).toMatchSnapshot()
})