import { PageLayout } from 'components';

import * as s from './home.layout.styles';

const HomeLayout = () => {
  return (
    <PageLayout title="Template NextTS">
      <s.Wrapper>
        <s.Section>
          <s.Title>
            Template {''}
            <s.Strong css={{ color: '$primary-11' }}>Next</s.Strong>
            <s.Strong css={{ color: '$quaternary-11' }}>TS</s.Strong>
          </s.Title>
          <s.Description>
            Made with NextJS, TypeScript, Stitches and Radix.
          </s.Description>
        </s.Section>
      </s.Wrapper>
    </PageLayout>
  );
};

export { HomeLayout };
