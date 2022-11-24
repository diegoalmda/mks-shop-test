import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonContainer } from './styles';

export function HeaderSkeleton() {
  return (
    <SkeletonTheme baseColor="#cecece" highlightColor="#bebebe">
      <SkeletonContainer>
        <Skeleton width={'100%'} height={'100%'} />
      </SkeletonContainer>
    </SkeletonTheme>
  );

}
