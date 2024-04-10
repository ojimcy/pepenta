function copyContractAddress() {
  // Select the contract address span element
  const contractAddress = document.getElementById('contract-address');

  // Create a temporary input element
  const tempInput = document.createElement('input');
  tempInput.value = contractAddress.innerText;
  document.body.appendChild(tempInput);

  // Select the text in the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the text to the clipboard
  document.execCommand('copy');

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Alert the user
  alert('Contract address copied to clipboard!');
}
