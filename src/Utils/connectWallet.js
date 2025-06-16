export const handleConnectWallet = async (connectMetamaskWithAccount) => {
  try {
    if (typeof window.ethereum === "undefined") {
      alert("No Metamask detected. Please install metamask to continue");
      return;
    }

    await connectMetamaskWithAccount();
  } catch (error) {
    console.error("Error while connecting wallet: ", error);
    alert(
      "Something went wrong while connecting your wallet. Please try again."
    );
  }
};
