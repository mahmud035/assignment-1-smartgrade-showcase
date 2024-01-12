import logo from '../assets/school-logo.jpg';

const Navbar = () => {
  return (
    <nav className="px-6 py-6">
      <div className="container flex items-center justify-between mx-auto gap-x-6">
        <a href="/" className="inline-flex items-center gap-2">
          <img
            className="h-[40px] bg-transparent rounded-full border-2 border-[#00D991]"
            src={logo}
            alt="Lws"
          />
          <div className="text-xs font-semibold">
            <h3>S. M. Model</h3>
            <h3>Govt High School</h3>
          </div>
        </a>

        <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
          Get Admission
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
