import { useState } from "react";
import "./browserFrame.scss";

function BrowserFrame({ src, alt, width, height, eager = false, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={className ? `browserFrame ${className}` : "browserFrame"}>
      <div className="browserFrameBar">
        <span />
        <span />
        <span />
      </div>
      <div className="browserFrameBody">
        {!failed && src && (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}

export default BrowserFrame;
