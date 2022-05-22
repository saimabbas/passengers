export const shortenAddress = (address) =>
  address ? `${address.slice(0, 5)}...${address.slice(-5)}` : null;

/**
 *
 * @param {Numer} number is the number to formatted in to given decimals place
 * @param {Number} decimal is the number of decimal places to keep. default is 2
 * @returns number after formatted
 */
export const toYdecimalPlace = (number, decimal = 2) =>
  Number(number) ? Number(number).toFixed(decimal) : "0.00";

export const getStatusProviderFromStore = () =>
  JSON.parse(localStorage.getItem("whitelistProviderConnectStatus"));

export const updateproviderInStore = (stauts = false) =>
  localStorage.setItem("whitelistProviderConnectStatus", stauts);
