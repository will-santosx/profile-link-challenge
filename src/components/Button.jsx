// eslint-disable-next-line react/prop-types
const Button = ({ title }) => {
  return (
    <button className="bg-n-grey w-[75%] h-[2.4rem] focus:border-2 text-paragraph focus:border-n-off-black focus:bg-n-green focus:outline-none focus: scale-[102%] focus:font-semibold focus:text-n-off-black hover:bg-n-green transition-all hover:scale-[102%] hover:text-n-off-black hover:font-semibold p-2 rounded-[7px]">
      {title}
    </button>
  );
};

export default Button;
