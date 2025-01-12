import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const frames = [
    {
      title: 'Tiger',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81eJpEEQwYL._AC_SL1500_.jpg',
      description:
        '(Panthera tigris) is the largest extant cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar.',
    },
    {
      title: 'Lion',
      img: 'https://image.freepik.com/free-vector/cute-lion-cartoon_160606-353.jpg',
      description:
        'The lion is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail.',
    },
    {
      title: 'Rat',
      img: 'https://i.pinimg.com/originals/07/1d/d0/071dd09d7b36e49139fe2cf08ff728a8.jpg',
      description:
        'Rats are various medium-sized, long-tailed rodents. Species of rats are found throughout the order Rodentia, but stereotypical rats are found in the genus Rattus.',
    },
    {
      title: 'Owl',
      img: 'https://image.freepik.com/free-vector/cartoon-owl-tree-branch_194935-43.jpg',
      description:
        'Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance.',
    },
  ];

  const limit = { start: 0, end: frames.length - 1 };

  const next = () => {
    if (index < limit.end) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > limit.start) {
      setIndex(index - 1);
    }
  };

  const gotoFrame = (frameIndex) => {
    setIndex(frameIndex);
  };

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 39 && index < limit.end) {
        next();
      }
      if (e.keyCode === 37 && index > limit.start) {
        prev();
      }
    };
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [index, limit.end, limit.start]);

  return (
    <div className="text-xl font-bold m-5 text-center">
      Use Keyboard Arrow Keys To Go Left And Right
      <div
        className="gallery border-2 rounded mx-auto m-5 bg-white"
        style={{ width: '750px' }}
      >
        <div className="top flex p-2 border-b select-none">
          <div className="heading text-gray-800 w-full pl-3 font-semibold my-auto">
            {frames[index].title}
          </div>
          <div className="buttons ml-auto flex text-gray-600 mr-1">
            <svg
              onClick={prev}
              className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <svg
              onClick={next}
              className="w-7 border-2 rounded-r-lg p-1 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>

        <div className="content-area w-full h-96 overflow-hidden">
          <div className="platform shadow-xl h-full flex transition-right duration-300">
            {frames.map((frame, i) => (
              <div
                key={i}
                className="each-frame border-box flex-none h-full"
                style={{
                  width: '750px',
                  transform: `translateX(-${index * 750}px)`,
                }}
              >
                <div className="main flex w-full p-8">
                  <div className="sub w-4/6 my-auto">
                    <img
                      className="w-full p-8"
                      src={frame.img}
                      alt={frame.title}
                    />
                  </div>
                  <div className="sub w-full my-auto">
                    <div className="head text-3xl font-bold mb-4">
                      {frame.title}
                    </div>
                    <div className="long-text text-lg">{frame.description}</div>
                    <div
                      className="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer"
                      onClick={() => gotoFrame(2)}
                    >
                      Goto Third Frame
                    </div>
                    <div
                      className="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer"
                      onClick={() => gotoFrame(limit.end)}
                    >
                      Goto Last Frame
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
