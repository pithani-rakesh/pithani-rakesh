import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
const ShareButtons = () => {
  // Assuming you have the URL of your deployed application
  const shareUrl = "https://your-deployed-url.com";

  return (
    <div>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
