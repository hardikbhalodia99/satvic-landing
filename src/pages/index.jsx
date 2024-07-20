import React, { useState } from 'react';
import { CalenderSVG, DurationSvg, GlobeSvg } from '../utils/svgs';
import Step1Modal from '../components/Home/Step1Modal';
import SellerComponent from '../components/Home/SellerComponent';
import BaseLayout from '../components/Layout/BaseLayout';

const Home = ({}) => {
  const data = [
    {
      id: 1,
      image: '/images/challenge/MM1.png',
      title: 'Ultimate Health Challenge',
      tag: 'Must Join',
      star: '4.8',
      reviews: 3034,
      description:
        'If you want to reach your ultimate peak health, then this workshop is for you. Learn 7 revolutionary habits over a span of 21 days!',
      cards: [
        {
          svg: <CalenderSVG />,
          title: '6th May',
          description: 'Start Date',
        },
        {
          svg: <DurationSvg />,
          title: '21 Days',
          description: 'Duration',
        },
        { svg: <GlobeSvg />, title: 'English', description: 'Language' },
      ],
      price: 990,
      alreadyJoined: 3480,
    },
    {
      id: 2,
      image: '/images/challenge/MM2.png',
      title: 'Heal Yourself Challenge',
      tag: 'Recommended',
      star: '4.8',
      reviews: 3034,
      description: '7 days program to help you learn 9 steps to heal your chronic lifestyle diseases following the Satvic Healing Plan.',
      cards: [
        {
          svg: <CalenderSVG />,
          title: '6th May',
          description: 'Start Date',
        },
        {
          svg: <DurationSvg />,
          title: '21 Days',
          description: 'Duration',
        },
        { svg: <GlobeSvg />, title: 'English', description: 'Language' },
      ],
      price: 990,
      alreadyJoined: 3480,
    },
    {
      id: 3,
      image: '/images/challenge/MM3.png',
      title: 'Yoga Challenge',
      tag: null,
      star: '4.8',
      reviews: 3034,
      description:
        'Learn how to manage stress, anxiety, emotional imbalance and fear. Learn yoga philosophy, asanas and meditations to take charge of your joy!',
      cards: [
        {
          svg: <CalenderSVG />,
          title: '6th May',
          description: 'Start Date',
        },
        {
          svg: <DurationSvg />,
          title: '21 Days',
          description: 'Duration',
        },
        { svg: <GlobeSvg />, title: 'Hindi', description: 'Language' },
      ],
      price: 990,
      alreadyJoined: 3480,
    },
    {
      id: 4,
      image: '/images/challenge/MM4.png',
      title: '7-Day Satvic Food Challenge',
      tag: null,
      star: '4.8',
      reviews: 3034,
      description: 'Cook-along all three meals with us, and experience the magic of Satvic eating!',
      cards: [
        {
          svg: <CalenderSVG />,
          title: '6th May',
          description: 'Start Date',
        },
        {
          svg: <DurationSvg />,
          title: '21 Days',
          description: 'Duration',
        },
        { svg: <GlobeSvg />, title: 'Hindi', description: 'Language' },
      ],
      price: 990,
      alreadyJoined: 3480,
    },
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className=" ">
        <img src={'/images/banner.png'} className="hidden md:block w-full" />
        <img src={'/images/banner-mobile.png'} className="md:hidden w-full" />
        <div className="md:absolute  md:top-[55%] md:left-0 md:right-0  flex flex-col items-center justify-center gap-5 pb-[150px]">
          {data.map((itemData, index) => {
            return <SellerComponent data={itemData} key={index} setSelectedItem={setSelectedItem} />;
          })}
        </div>
      </div>
      {selectedItem && <Step1Modal data={selectedItem} setSelectedItem={setSelectedItem} />}
    </>
  );
};

Home.Layout = BaseLayout;

export default Home;
