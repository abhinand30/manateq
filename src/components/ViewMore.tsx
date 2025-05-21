import { useState } from "react";

const ViewMoreText = ({ text, limit = 250 }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <p>{showMore ? text : `${text.substring(0, limit)}...`}</p>
      <button
        className="underline text-[#83764F]"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "View Less" : "View More"}
      </button>
    </div>
  );
};

export default ViewMoreText;
