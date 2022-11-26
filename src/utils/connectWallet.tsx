export async function connectWallet() {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      return {
        address: addressArray[0],
        status: 'Fill in the form and hit the button when ready!',
      };
    } catch (err) {
      if (err instanceof Error) {
        return {
          address: '',
          status: err.message,
        };
      }
    }
  }

  return {
    address: '',
    status: (
      <p>
        🦊
        <a target="_blank" href="https://metamask.io/download.html">
          You must install Metamask, a virtual Ethereum wallet, in your browser.
        </a>
      </p>
    ),
  };
}
