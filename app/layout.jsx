"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

import { useState } from "react";
import { ethers } from "ethers";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export const metadata = {
  title: "Zenith",
  description: "An NFT Marketplace",
};

function RootLayout({ children }) {
  const [account, setAccount] = useState(null);
  const [modalDefaultOpen, setModalDefaultOpen] = useState(false);
  // MetaMask Login/Connect
  const web3Handler = async () => {
    // If function checks if metamask wallet present, if not a modal pops up
    if (typeof window.ethereum === "undefined") {
      console.log("MetaMask is not installed!");
      setModalDefaultOpen(true);
    } else {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      // Get provider from MetaMask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
    }
  };

  return (
    <>
      <html lang="en">
        <head>
          <title>Zenith</title>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          ></link>
        </head>

        <body>
          <Modal
            isOpen={modalDefaultOpen}
            toggle={() => setModalDefaultOpen(false)}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Error: MetaMask Wallet Not Detected
                  </h1>
                  <button
                    aria-label="Close"
                    className="btn-close"
                    onClick={() => setModalDefaultOpen(false)}
                    type="button"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    We apologize for the inconvenience, but in order to perform
                    transactions and access the full range of features on
                    Zenith, you will need to have a MetaMask Wallet installed.
                    MetaMask is a secure and widely used cryptocurrency wallet
                    that enables seamless interactions with decentralized
                    applications like ours.
                  </p>
                  <p>
                    Please follow the
                    <a
                      href="https://tinyurl.com/zenith-user-guide"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      setup guide
                    </a>{" "}
                    and try again.
                  </p>
                  <p>Thank you.</p>
                </div>
                <div className="modal-footer">
                  <Button
                    color="dark"
                    type="button"
                    onClick={() => setModalDefaultOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </Modal>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">
                Zenith
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active link hover-2"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link hover-2" href="/create-nft">
                      Create NFT
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link link hover-2" href="/my-assets">
                      My Purchases
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link hover-2" href="/dashboard">
                      My Listed Items
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link hover-2" href="/tutorial">
                      Tutorial
                    </Link>
                  </li>
                  <li className="nav-item">
                    {account ? (
                      <Link
                        className="nav-link link hover-2"
                        href={`https://etherscan.io/address/${account}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button type="button" className="btn btn-dark">
                          {account.slice(0, 5) + "..." + account.slice(38, 42)}
                        </button>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={web3Handler}
                      >
                        Connect Wallet
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <main>{children}</main>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
            crossOrigin="anonymous"
            async
          ></script>
          <script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
            async
          ></script>
        </body>
      </html>
    </>
  );
}

export default RootLayout;
