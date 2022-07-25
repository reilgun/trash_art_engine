const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);

// General metadata for Ethereum
const namePrefix = "Trash";
const description = "Piles of Trash Collection";
const baseUri = "ipfs://NewUriToReplace";

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 9996,
    layersOrder: [
      { name: "Background" },
      { name: "Trash" },
      { name: "Floor", displayName: "Ground" },
      { name: "Top" },
      { name: "Near" },
      { name: "Sign" },
      { name: "Flying" },
      { name: "Bum" },
    ],
  },
  {
    growEditionSizeTo: 4,
    layersOrder: [
      { name: "Background" },
      { name: "Trash" },
      { name: "Floor", displayName: "Ground" },
      { name: "Top" },
      { name: "Near"},
      { name: "Sign" },
      { name: "Flying" },
      { name: "Bum" },
      { name: "Legendary" }
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2048,
  height: 2048,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "_";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  gif,
  preview_gif,
};
