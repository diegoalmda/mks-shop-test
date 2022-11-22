import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { SkeletonContainer } from './styles';

export function BoxSkeleton() {
  return (
    <SkeletonTheme baseColor="#cecece" highlightColor="#bebebe">
      <SkeletonContainer>
        <Skeleton width={'14.75rem'} height={'20rem'} />
        <Skeleton width={'14.75rem'} height={'20rem'} />
        <Skeleton width={'14.75rem'} height={'20rem'} />
        <Skeleton width={'14.75rem'} height={'20rem'} />
      </SkeletonContainer>
    </SkeletonTheme>
  );

}
