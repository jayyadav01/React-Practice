import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonProfile = () => {
    return (
      <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
        <Skeleton circle height={50} width={50} />
        <div style={{ marginLeft: "16px", flex: 1 }}>
          <Skeleton width="60%" height={20} />
          <Skeleton width="40%" height={15} style={{ marginTop: "8px" }} />
        </div>
      </div>
    );
  };

export default SkeletonProfile