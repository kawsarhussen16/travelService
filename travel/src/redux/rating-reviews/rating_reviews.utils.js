export const getReviews = () => {
  return data;
};
export const getAverageRating = (data) => {
  let total = 0;
  let totalReviews = 0;
  data.forEach((re) => {
    total += re.rating;
    totalReviews += 1;
  });
  let avgRating = (total / totalReviews).toFixed(1);
  return { avgRating, totalReviews };
};
const data = [
  {
    username: "John",
    headline: "Perfect Tour",
    date: new Date(),
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    rating: 5,
  },
  {
    username: "Melissa",
    headline: "Great adventure",
    date: new Date(),
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    rating: 4,
  },
  {
    username: "David",
    headline: "Not Bad",
    date: new Date(),
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    rating: 4,
  },
  {
    username: "Donald",
    headline: "Perfect with Melania",
    date: new Date(),
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    rating: 5,
  },
  {
    username: "Barack",
    headline: "Awesome experience",
    date: new Date(),
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    rating: 5,
  },
  {
    username: "Hilary",
    headline: "Could be better",
    date: new Date(),
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    rating: 4,
  },
];
