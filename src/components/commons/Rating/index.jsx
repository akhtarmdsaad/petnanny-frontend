import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function BasicRating({rate}) {
  const [value, setValue] = React.useState(rate);

  return (
      <Rating name="read-only" value={value} readOnly />
  );
}
