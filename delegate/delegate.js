"use strict";

class WalletService {
    numWalletCalls = 0;
    walletLoaded = false;
    errorLoadingWallet = false;
    delegateAnchor;
    id;

    constructor(delegateAnchor) {
        this.delegateAnchor = delegateAnchor;
        this.id = this.delegateAnchor.getAttribute('delegate');
        if (this.delegateAnchor.hasAttribute('eternl')) {
            if (this.eternlAvailable()) {
                this.delegateAnchor.addEventListener('click', this.connectEternl());
            } else {
                this.delegateAnchor.style.display = "none";
            }
        } else if (this.delegateAnchor.hasAttribute('nami')) {
            if (this.namiAvailable()) {
                this.delegateAnchor.addEventListener('click', this.connectNami());
            } else {
                this.delegateAnchor.style.display = "none";
            }
        } else if (this.delegateAnchor.hasAttribute('gero')) {
            if (this.geroAvailable()) {
                this.delegateAnchor.addEventListener('click', this.connectGero());
            } else {
                this.delegateAnchor.style.display = "none";
            }
        } else if (this.delegateAnchor.hasAttribute('flint')) {
            if (this.flintAvailable()) {
                this.delegateAnchor.addEventListener('click', this.connectFlint());
            } else {
                this.delegateAnchor.style.display = "none";
            }
        }
    }

    /**
 * Check if eternl is available
 */
    eternlAvailable() {
        return ((globalThis != null) && (globalThis.cardano != null) && (globalThis.cardano.eternl != null));
    }
    /**
     * Connect to eternl wallet ext
     */
    connectEternl() {
        var _this = this;
        return function () {
            document.body.style.cursor = "wait";
                     if (globalThis.cardano.eternl != null) {
                globalThis.cardano.eternl.enable().then(function (api) {
                    _this.finishWalletConnect(api, "eternl");
                }).catch(function (e) {
                    console.log(e);
                });
            }
            else {
                return ("Eternl extension not installed");
            }
            return null;
        };
    }
    /**
     * Check if Nami is available
     */
    namiAvailable() {
        return ((globalThis != null) && (globalThis.cardano != null) && (globalThis.cardano.nami != null));
    }
    /**
     * Connect to the nami ext
     */
    connectNami() {
        var _this = this;
        return function () {
            document.body.style.cursor = "wait";
            if (globalThis.cardano.nami != null) {
                globalThis.cardano.nami.enable().then(function (api) {
                    _this.finishWalletConnect(api, "nami");
                }).catch(function (e) {
                    console.log(e);
                });
            }
            else {
                return ("Nami extension not installed");
            }
            return null;
        };
    }
    /**
     * Check if gero is available
     */
    geroAvailable() {
        return ((globalThis != null) && (globalThis.cardano != null) && (globalThis.cardano.gerowallet != null));
    }
    /**
     * Connect to the gero ext
     */
    connectGero() {
        var _this = this;
        return function () {
            document.body.style.cursor = "wait";
            if (globalThis.cardano.gerowallet != null) {
                globalThis.cardano.gerowallet.enable().then(function (api) {
                    _this.finishWalletConnect(api, "gero");
                }).catch(function (e) {
                    console.log(e);
                });
            }
            else {
                return ("Gero extension not installed");
            }
            return null;
        };
    }
    /**
     * Check if flint is available
     */
    flintAvailable() {
        return ((globalThis != null) && (globalThis.cardano != null) && (globalThis.cardano.flint != null));
    }
    /**
     * Connect to the flint ext
     */
    connectFlint() {
        var _this = this;
        return function () {
            document.body.style.cursor = "wait";
            if (globalThis.cardano.flint != null) {
                globalThis.cardano.flint.enable().then(function (api) {
                    _this.finishWalletConnect(api, "flint");
                }).catch(function (e) {
                    console.log(e);
                });
            }
            else {
                return ("Flint extension not installed");
            }
            return null;
        };
    }
    /**
     * Finish connecting to the wallet and pull the wallet data
     * @param api
     * @param source
     */
    finishWalletConnect(api, source) {
        var _this = this;
        if (api != null) {
            this.errorLoadingWallet = false;
            globalThis.walletSource = source;
            globalThis.walletApi = api;
            /**
             * https://cips.cardano.org/cips/cip30/
             */
            globalThis.wallet = {
                "user": "freeloaderz",
                "sending_wal_addrs": [],
                "inputs": [],
                "excludes": [],
                "collateral": [],
                "contract_id": 1,
                "network": 0,
                "sending_stake_addr": "",
                "maskedBalance": "",
                "script": {
                    "StakeDelegation": {
                        "poolhash": this.id
                    }
                }
            }
            globalThis.walletApi.getNetworkId()
                .then(function (data) { return _this.processNetworkId(data); })
                .catch(function (e) { return _this.handleError(e); });
        }
    }
    updateWallet() {
        var _this = this;
        this.numWalletCalls = 5;
        globalThis.walletApi.getRewardAddresses()
            .then(function (res) { return _this.processRewardAddresses(res); })
            .catch(function (e) { return _this.handleError(e); });
        globalThis.walletApi.getUtxos()
            .then(function (res) { return _this.processUtxos(res); })
            .catch(function (e) { return _this.handleError(e); });
        globalThis.walletApi.getUsedAddresses()
            .then(function (res) { return _this.processUsedAddresses(res); })
            .catch(function (e) { return _this.handleError(e); });
        globalThis.walletApi.experimental.getCollateral()
            .then(function (res) { return _this.processCollateral(res); })
            .catch(function (e) { return _this.handleError(e); });
        globalThis.walletApi.getBalance()
            .then(function (res) { return _this.processMaskedBalance(res); })
            .catch(function (e) { return _this.handleError(e); });
    }
    /**
     * Set the wallet network
     * @param data
     * @private
     */
    processNetworkId(data) {
        globalThis.wallet.network = data;
        this.updateWallet();
    }
    /**
     * Process the reward addresses/stake addr
     * @param data
     * @private
     */
    processRewardAddresses(data) {
        if (data[0] != null) {
            globalThis.wallet.sending_stake_addr = data[0];
            if (--this.numWalletCalls === 0) {
                this.finishedWalletCalls();
            }
        }
        else {
            this.handleError("Reward Address was null?");
            return;
        }
    }
    /**
     * Process the UTXOs/inputs
     * @param data
     * @private
     */
    processUtxos(data) {
        globalThis.wallet.inputs = [];
        for (var i = 0; i < data.length; ++i) {
            globalThis.wallet.inputs.push(data[i]);
        }
        if (--this.numWalletCalls === 0) {
            this.finishedWalletCalls();
        }
    }
    /**
     * Process the unused addr/sending_wallet_addr
     * @param data
     * @private
     */
    processUnusedAddresses(data) {
        globalThis.wallet.sending_wal_addrs = [];
        for (var i = 0; i < data.length; ++i) {
            globalThis.wallet.sending_wal_addrs.push(data[i]);
        }
        if (--this.numWalletCalls === 0) {
            this.finishedWalletCalls();
        }
    }
    /**
     * Process the used addr/sending_wallet_addr
     * @param data
     * @private
     */
    processUsedAddresses(data) {
        globalThis.wallet.sending_wal_addrs = [];
        for (var i = 0; i < data.length; ++i) {
            if (data[i].length > 110) {
                globalThis.wallet.sending_wal_addrs.push(data[i]);
            }
        }
        if (--this.numWalletCalls === 0) {
            this.finishedWalletCalls();
        }
    }
    /**
     * Process the collateral data
     * @param data
     * @private
     */
    processCollateral(data) {
        globalThis.wallet.collateral = [];
        for (var i = 0; i < data.length; ++i) {
            globalThis.wallet.collateral.push(data[i]);
        }
        if (--this.numWalletCalls === 0) {
            this.finishedWalletCalls();
        }
    }
    /**
     * Process the balance
     * @param data
     * @private
     */
    processMaskedBalance(data) {
        globalThis.wallet.maskedBalance = data;
        if (--this.numWalletCalls === 0) {
            this.finishedWalletCalls();
        }
    }
    /**
     * @TODO -> Need some kind of error handling for this.. not just print console
     * @param e
     */
    handleError(e) {
        this.errorLoadingWallet = true;
        console.log(e);
        if (--this.numWalletCalls === 0) {

        }
    }
    /**
     * Check if the user has ANY wallet available
     *
     * @TODO should display something for the user if false
     */
    anyWalletAvailable() {
        if ((this.eternlAvailable()) ||
            (this.namiAvailable()) ||
            (this.flintAvailable()) ||
            (this.geroAvailable())) {
            return true;
        }
        return false;
    }
    /**
     *
     * @private
     */
    finishedWalletCalls() {
        var url = '/rwdbuild/tx/stakedelegation';
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJzdWIiOiIyIiwiZXhwIjozMTg3OTg5NTQ1Mzl9.GuduKuWlIRtzNBDBI4FGWBua45ysiugdSve3AZ-5EWvQnoyLvCwlUkLibR6Zb66MHE5fMOAVmNMn3ZHgV-hGig");
        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 201) {
                return _this.processResponse(xhr.responseText);
            } else {
                console.log(`Error: ${xhr.status}`);
                showError();
            }
        };
  
        xhr.send(JSON.stringify(globalThis.wallet));
        document.body.style.cursor = "";
    }
}


function showSuccess() {
    // Get the snackbar DIV
    var x = document.getElementById("toastsuccess");
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }


function showError() {
    // Get the snackbar DIV
    var x = document.getElementById("toasterror");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

window.addEventListener(
    'load',
    function () {
        if ((globalThis == null) || (globalThis.cardano == null)
            || ((globalThis.cardano.eternl == null)
                && (globalThis.cardano.gero == null)
                && (globalThis.cardano.flint == null)
                && (globalThis.cardano.nami == null))) {
            var nowallets = document.querySelectorAll('.nowallets');
            console.log(nowallets.length);
            for (var i = 0; i < nowallets.length; i++) {
                nowallets[i].style.display = "block";
            }
            var haswallets = document.querySelectorAll('.haswallets');
            console.log(haswallets.length);
            for (var i = 0; i < haswallets.length; i++) {
                haswallets[i].style.display = "none";
            }
        }
        else {
            var delegates = document.querySelectorAll('button.delegate');
            for (var i = 0; i < delegates.length; i++) {
                new WalletService(delegates[i]);
            }
        }

    },
    false
);
window.onerror = function (message) { alert(message); return true; }; 