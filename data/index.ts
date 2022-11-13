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
  image: ImageSourcePropType;
}

export interface nftInterface {
  id: number;
  name: string;
  image: ImageSourcePropType;
  category: categoryInterface;
  author: string;
  owner: string;
}

const eth: currency = {
  id: 1,
  name: "ETH",
  image: require("../assets/images/currency/eth-logo.png"),
};

export const nfts: nftInterface[] = [
  {
    id: 1,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[0],
    author: "Author 1",
    owner: "Owner",
  },
  {
    id: 2,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0012.jpg"),
    category: categories[1],
    author: "Th-Author",
    owner: "The Owner",
  },
  {
    id: 3,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0013.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 4,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0014.jpg"),
    category: categories[1],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 5,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0015.jpg"),
    category: categories[0],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 6,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0016.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 7,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 8,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0023.jpg"),
    category: categories[3],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 9,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0024.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 11,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[0],
    author: "Author 1",
    owner: "Owner",
  },
  {
    id: 12,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0012.jpg"),
    category: categories[1],
    author: "Th-Author",
    owner: "The Owner",
  },
  {
    id: 13,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0013.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 14,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0014.jpg"),
    category: categories[1],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 15,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0015.jpg"),
    category: categories[0],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 16,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0016.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 17,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 18,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0023.jpg"),
    category: categories[3],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 19,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0024.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 111,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[0],
    author: "Author 1",
    owner: "Owner",
  },
  {
    id: 112,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0012.jpg"),
    category: categories[1],
    author: "Th-Author",
    owner: "The Owner",
  },
  {
    id: 113,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0013.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 114,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0014.jpg"),
    category: categories[1],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 115,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0015.jpg"),
    category: categories[0],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 116,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0016.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 117,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 118,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0023.jpg"),
    category: categories[3],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 119,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0024.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 21,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[0],
    author: "Author 1",
    owner: "Owner",
  },
  {
    id: 22,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0012.jpg"),
    category: categories[1],
    author: "Th-Author",
    owner: "The Owner",
  },
  {
    id: 23,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0013.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 24,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0014.jpg"),
    category: categories[1],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 25,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0015.jpg"),
    category: categories[0],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 26,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0016.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 27,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0017.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 28,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0023.jpg"),
    category: categories[3],
    author: "N_Author",
    owner: "Owner Name",
  },
  {
    id: 29,
    name: "Teaser",
    image: require("../assets/images/nft/IMG_0024.jpg"),
    category: categories[2],
    author: "N_Author",
    owner: "Owner Name",
  },
];

export interface collectionInterface {
  id: number;
  name: string;
  nfts: nftInterface[];
  category: categoryInterface;
  author: string;
  image: ImageSourcePropType;
  currency: currency;
  handle: string;
  hightest_bid: number;
}

export const collections: collectionInterface[] = [
  {
    id: 1,
    name: "Teaser",
    nfts: nfts.slice(2, 7),
    category: categories[0],
    author: "Matt_Sypien",
    image: nfts[2].image,
    currency: eth,
    handle: "@Handle_prime",
    hightest_bid: 1.87,
  },
  {
    id: 2,
    name: "Teaser 2",
    nfts: nfts.slice(5, 10),
    category: categories[1],
    author: "Matt_Sypien",
    image: nfts[5].image,
    currency: eth,
    handle: "@Handle_prime",
    hightest_bid: 0.92,
  },
  {
    id: 3,
    name: "Teaser 3",
    nfts: nfts.slice(10, 15),
    category: categories[2],
    author: "Matt_Sypien",
    image: nfts[10].image,
    currency: eth,
    handle: "@Handle_prime",
    hightest_bid: 0.75,
  },
  {
    id: 4,
    name: "Teaser 4",
    nfts: nfts.slice(13, 17),
    category: categories[3],
    author: "Matt_Sypien",
    image: nfts[13].image,
    currency: eth,
    handle: "@Handle_prime",
    hightest_bid: 2.63,
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
