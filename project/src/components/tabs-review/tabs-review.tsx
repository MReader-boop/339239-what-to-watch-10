type TabsReviewProps = {
  review: {
    text: string,
    rating: number,
    userName: string,
    date: string
  };
}

function TabsReview({review}: TabsReviewProps): JSX.Element {
  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.userName}</cite>
          <time className="review__date" dateTime="2016-12-24">{review.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default TabsReview;
