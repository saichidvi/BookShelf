import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader__section">
      <ColorRing
        visible={true}
        height="60"
        width="60"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["gray", "gray", "gray", "gray", "gray"]}
      />
    </div>
  );
};

export default Loader;
