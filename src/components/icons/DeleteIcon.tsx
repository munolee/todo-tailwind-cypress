import { FC } from "react";

const DeleteIcon: FC = () => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="24" height="24" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1_3" transform="scale(0.00195312)" />
          </pattern>
          <image
            id="image0_1_3"
            width="512"
            height="512"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default DeleteIcon;