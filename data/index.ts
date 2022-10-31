import { ImageSourcePropType } from "react-native";

export interface categoryInterface {
  id: number;
  name: string;
}

export const categories: categoryInterface[] = [
  {
    id: 1,
    name: "Recent",
  },
  {
    id: 3,
    name: "Trending",
  },
  {
    id: 4,
    name: "Top",
  },
  {
    id: 5,
    name: "Collectibles",
  },
];

export interface currency {
  id: number;
  name: string;
  image: string;
}

export interface nftInterface {
  id: number;
  name: string;
  image: ImageSourcePropType;
  category: categoryInterface;
  author: string;
  owner: string;
  hightest_bid: number;
  currency: currency;
}

const eth: currency = {
  id: 1,
  name: "ETH",
  image: require("../assets/images/currency/eth.png"),
};

export const nfts: nftInterface[] = [
  {
    id: 1,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[0],
    author: "Author 1",
    owner: "Owner",
    hightest_bid: 100,
    currency: eth,
  },
  {
    id: 2,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0012.jpg"),
    category: categories[1],
    author: "Th-Author",
    owner: "The Owner",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 3,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0013.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 4,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0014.jpg"),
    category: categories[1],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 5,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0015.jpg"),
    category: categories[0],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 6,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0016.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 7,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 8,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0023.jpg"),
    category: categories[3],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 9,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0024.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 11,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[0],
    author: "Author 1",
    owner: "Owner",
    hightest_bid: 100,
    currency: eth,
  },
  {
    id: 12,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0012.jpg"),
    category: categories[1],
    author: "Th-Author",
    owner: "The Owner",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 13,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0013.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 14,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0014.jpg"),
    category: categories[1],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 15,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0015.jpg"),
    category: categories[0],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 16,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0016.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 17,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 18,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0023.jpg"),
    category: categories[3],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 19,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0024.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 111,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[0],
    author: "Author 1",
    owner: "Owner",
    hightest_bid: 100,
    currency: eth,
  },
  {
    id: 112,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0012.jpg"),
    category: categories[1],
    author: "Th-Author",
    owner: "The Owner",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 113,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0013.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 114,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0014.jpg"),
    category: categories[1],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 115,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0015.jpg"),
    category: categories[0],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 116,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0016.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 117,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 118,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0023.jpg"),
    category: categories[3],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 119,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0024.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 21,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[0],
    author: "Author 1",
    owner: "Owner",
    hightest_bid: 100,
    currency: eth,
  },
  {
    id: 22,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0012.jpg"),
    category: categories[1],
    author: "Th-Author",
    owner: "The Owner",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 23,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0013.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 24,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0014.jpg"),
    category: categories[1],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 25,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0015.jpg"),
    category: categories[0],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 26,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0016.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 27,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 28,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0023.jpg"),
    category: categories[3],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
  {
    id: 29,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0024.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
    hightest_bid: 200,
    currency: eth,
  },
];

export interface collectionInterface {
  id: number;
  name: string;
  nfts: nftInterface[];
  category: categoryInterface;
  author: string;
}

export const collection: collectionInterface[] = [
  {
    id: 1,
    name: "Teaser",
    nfts: nfts.splice(2, 4),
    category: categories[0],
    author: "Matt_Sypien",
  },
  {
    id: 2,
    name: "Teaser 2",
    nfts: nfts.splice(5, 8),
    category: categories[1],
    author: "Matt_Sypien",
  },
  {
    id: 3,
    name: "Teaser 3",
    nfts: nfts.splice(7, 10),
    category: categories[2],
    author: "Matt_Sypien",
  },
  {
    id: 4,
    name: "Teaser 4",
    nfts: nfts.splice(6, 10),
    category: categories[3],
    author: "Matt_Sypien",
  },
];

interface userInterface {
  id: number;
  name: string;
  image: ImageSourcePropType;
}

export const user: userInterface = {
  id: 1,
  name: "Too",
  image: require("../assets/images/user/avatar.png"),
};
