// src/components/segments/SegmentPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import SegmentLayout from '../../segments/Layout/SegmentLayout';

const SegmentPage = () => {
  // The actual content will be loaded by SegmentLayout based on the URL parameter
  return <SegmentLayout />;
};

export default SegmentPage;