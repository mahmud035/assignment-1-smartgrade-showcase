import heroGraphics from '../assets/hero-graphics.svg';

const Header = () => {
  return (
    <header className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
      <div className="container mx-auto">
        <div className="grid items-center w-10/12 mx-auto md:grid-cols-2">
          <img
            className="object-cover ml-auto md:order-2 animate-updown"
            src={heroGraphics}
            width="500px"
            height="500px"
            alt="Banner"
          />
          <div>
            <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
              Neither Smartphone nor Internet, only education can make you the
              Best.
            </h1>
            <a className="px-5 py-2.5 bg-[#038C61] rounded-[44px]" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
