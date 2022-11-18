import React from 'react';
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Faq from '../HomePage/Faq';
import '@testing-library/jest-dom';


test('should render Why US component', () => {
  const linkElement = Renderer.create(<Faq />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});