/* eslint-disable @typescript-eslint/no-unused-vars */
import {Film} from '../../types/film';
import TabsOverview from '../tabs-overview/tabs-overview';
import TabsDetails from '../tabs-details/tabs-details';
import TabsReviewList from '../tabs-review-list/tabs-review-list';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { reviews } from '../../mocks/reviews';

enum Tab {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

type TabsProps = {
  film: Film;
}

function Tabs({film}: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(Tab.Overview);
  return(
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === Tab.Overview ? 'film-nav__item--active' : ''}`}>
            <Link onClick={(evt) => {
              evt.preventDefault();
              setActiveTab(Tab.Overview);
            }} to="/" className="film-nav__link"
            >
              Overview
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === Tab.Details ? 'film-nav__item--active' : ''}`}>
            <Link onClick={(evt) => {
              evt.preventDefault();
              setActiveTab(Tab.Details);
            }} to="/" className="film-nav__link"
            >
              Details
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === Tab.Reviews ? 'film-nav__item--active' : ''}`}>
            <Link onClick={(evt) => {
              evt.preventDefault();
              setActiveTab(Tab.Reviews);
            }} to="/" className="film-nav__link"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      {activeTab === Tab.Overview ? <TabsOverview film={film}/> : ''}
      {activeTab === Tab.Details ? <TabsDetails film={film}/> : ''}
      {activeTab === Tab.Reviews ?
        <div className="film-card__reviews film-card__row">
          <TabsReviewList reviews={reviews.slice(0, Math.ceil(reviews.length / 2))} />
          <TabsReviewList reviews={reviews.slice(Math.ceil(reviews.length / 2))} />
        </div> : ''}
    </div>
  );
}

export default Tabs;
