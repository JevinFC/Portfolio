import { useState } from "react";
import "./browserFrame.scss";

function BrowserFrame({ src, alt, width, height, className = "", url, children }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={className ? `browserFrame ${className}` : "browserFrame"}>
      <div className="browserFrameBar">
        <span />
        <span />
        <span />
        {url && (
          <small className="browserFrameUrl" aria-hidden="true">
            {url}
          </small>
        )}
      </div>
      <div className="browserFrameBody">
        {children
          ? children
          : !failed &&
            src && (
              <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                onError={() => setFailed(true)}
              />
            )}
      </div>
    </div>
  );
}

export default BrowserFrame;
