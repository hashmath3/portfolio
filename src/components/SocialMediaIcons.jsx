const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/hasmat-shaik-63b627147/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/being_hashmath/s"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com/hashmath.basha/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src="../assets/facebook.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500 "
          href="https://github.com/hashmath3"
          target="_blank"
          rel="noreferrer"
        >
          <img className="mb-4 -mt-3" alt="github-link" src="../assets/github_PNG85 (1).png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;