import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <h2>Loading... </h2>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="1"
        animationDuration="3"
        width="100"
        visible={true}
      />
    </>
  );
};
