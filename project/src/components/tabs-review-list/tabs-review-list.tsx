import TabsReview from '../tabs-review/tabs-review';

type TabsReviewListProps = {
  reviews: {
    text: string,
    rating: number,
    userName: string,
    date: string
  }[];
}

function TabsReviewList({reviews}: TabsReviewListProps): JSX.Element {
  return(
    <div className="film-card__reviews-col">
      {reviews.map((review, i) => {
        const index = i;
        return <TabsReview key={`${index} - ${review}`} review={review} />;
      })}
    </div>
  );
}

export default TabsReviewList;
