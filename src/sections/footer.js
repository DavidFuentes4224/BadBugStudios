import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

export const Foot = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          David Fuentes // Bad Bug Studios
        </div>
        <div className="footer-social">
          <a
            href="https://github.com/DavidFuentes4224"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/david-fuentes-7aa01995/"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined /> LinkedIn
          </a>
        </div>
        <div className="footer-copy">
          © {year} David Fuentes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};