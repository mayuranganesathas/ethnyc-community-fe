import logoPng from "../../public/Logo_BONDFI.jpg";
import { Container } from "@material-ui/core";
// import ConnectWallet from "../ui/ConnectWallet";
import React, { useEffect, useState } from "react";
// import { useWalletAuth } from "../../lib/walletContext";

export const Footer = () => {
  return (
    <Container maxWidth="xl" className=" flex text-right py-20  ">
      <div className="bg-gray-50 w-full justify-between">
        <hr className="h-0.5 bg-black shadow-xl rounded-xl  " />
        <div className="text-left text-gray-400">Contact: xx@GMAIL.com</div>
        Test
      </div>
    </Container>
  );
};

export default Footer;
