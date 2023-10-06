import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            obcaecati quam. Alias nam reiciendis voluptatibus iusto voluptate
            ducimus hic saepe consequatur optio, obcaecati.
          </p>
          <p>&copy; Evogym. All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa come save me</p>
          <p className="my-5">Thissa como et sava</p>
          <p>Ulla laa ago</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus Ooompus Loompus</p>
          <p>+23490501234</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// 'flex-basis' allows our element to take up the entire width if there's nothing else to compete with. It automatically knows how to do it
