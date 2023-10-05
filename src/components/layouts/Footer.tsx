const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <p>&copy; Copyright - {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
