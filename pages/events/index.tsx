import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        <Link href="">
          <div>
            <img src="" alt="" />
            <h2>Events in London</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              quibusdam facere sunt error voluptates provident nisi eum aut
              esse! Atque laboriosam corporis voluptate ut enim id beatae
              possimus architecto quae?
            </p>
          </div>
        </Link>
        <Link href="">
          <div>
            <img src="" alt="" />
            <h2>Events in San-Francisco</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              quibusdam facere sunt error voluptates provident nisi eum aut
              esse! Atque laboriosam corporis voluptate ut enim id beatae
              possimus architecto quae?
            </p>
          </div>
        </Link>
        <Link href="">
          <div>
            <img src="" alt="" />
            <h2>Events in Barcelona</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              quibusdam facere sunt error voluptates provident nisi eum aut
              esse! Atque laboriosam corporis voluptate ut enim id beatae
              possimus architecto quae?
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
