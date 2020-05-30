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
