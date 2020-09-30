import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Header = () => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <header>

      <h1>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header;