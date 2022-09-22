import spinnerGif from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img src={spinnerGif} width={180} alt="Loading..." className="text-center mx-auto" />
    </div>
  );
};

export default Spinner;
