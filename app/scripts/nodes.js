'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETH: "ETH",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    NWN: "NWN",
    Custom: "CUSTOM ETH"
};
nodes.domainsaleNodeTypes = [nodes.nodeTypes.Ropsten]
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten]
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'nwn': {
        'name': 'NWN',
        'blockExplorerTX': '',
        'blockExplorerAddr': '',
        'type': nodes.nodeTypes.NWN,
        'eip155': true,
        'chainId': '',
        'tokenList': require('./tokens/ubqTokens.json'),
        'abiList': require('./abiDefinitions/ubqAbi.json'),
        'estimateGas': true,
        'service': 'localhost',
        'lib': new nodes.customNode('http://127.0.0.1:8545', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
