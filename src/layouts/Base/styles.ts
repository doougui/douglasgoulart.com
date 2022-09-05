import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  margin: 5rem 0;

  ${media.lessThan('medium')`
    margin: 3rem 0;
  `}
`;

export const Content = styled.main`
  margin-top: 10rem;

  ${media.lessThan('medium')`
    margin-top: 5rem;
  `}
`;
