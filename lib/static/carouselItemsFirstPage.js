const carouselItemsFirstPage = Array(20)
  .fill("")
  .map((_, index) => ({
    alt: "A random photo",
    image: `https://picsum.photos/${210 + index}`,
    content: (
      <div>
        <strong>Round Carousel</strong>
        <span>Slide number {index + 1}</span>
      </div>
    ),
  }));

// TO DO : Actually find pictures
const v2 = [
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${211}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "St. Lucia Secondary School, St. Lucia",
    image: `https://picsum.photos/${212}`,
    content: (
      <div>
        <strong>St. Lucia Secondary School, St. Lucia</strong>
        <span>179 Pieces</span>
      </div>
    ),
  },
  {
    alt: "California Institution of Technology, Berkley",
    image: `https://picsum.photos/${213}`,
    content: (
      <div>
        <strong>California Institution of Technology, Berkley</strong>
        <span>261 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${214}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${215}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${216}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${217}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${218}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${219}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${220}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${221}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${222}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${223}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
  {
    alt: "Mt. Creek High School, Missouri",
    image: `https://picsum.photos/${224}`,
    content: (
      <div>
        <strong>Mt. Creek High School, Missouri</strong>
        <span>17 Pieces</span>
      </div>
    ),
  },
];
export default v2;
