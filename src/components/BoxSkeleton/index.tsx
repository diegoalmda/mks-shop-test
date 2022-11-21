import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export function BoxSkeleton() {
  return (
    <SkeletonTheme baseColor="#cecece" highlightColor="#bebebe">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <Skeleton width={180} height={250} />
        <Skeleton width={180} height={250} />
        <Skeleton width={180} height={250} />
        <Skeleton width={180} height={250} />
      </div>
    </SkeletonTheme>
  );

}
