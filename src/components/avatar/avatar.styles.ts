import * as RadixAvatar from '@radix-ui/react-avatar';

import { styled } from 'styles/stitches.config';

export const Avatar = styled(RadixAvatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '$border-radius-circular',
  backgroundColor: '$black-03',
});

export const Image = styled(RadixAvatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const Fallback = styled(RadixAvatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$primary-03',
  color: '$primary-11',
  fontSize: '$font-size-03',
  lineHeight: '$font-line-height-100',
  fontWeight: '$font-weight-500',
});
