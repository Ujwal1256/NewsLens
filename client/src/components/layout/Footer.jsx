const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} NewsLens
      </div>
    </footer>
  );
};

export default Footer;