import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_media">
        <FacebookOutlinedIcon />
        <TelegramIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <div className="footer_text">
        <p>© 2024 Food Choose. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
