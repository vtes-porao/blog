/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";

const Bio = ({ author }) => {
  return (
    <div className="flex">
      <div name="profile-pic"></div>
      <div className="flex flex-col">
        {author?.name && (
          <span>
            Escrito por <strong>{author.name}</strong>
          </span>
        )}
        {author?.bio && <span>{author.bio}</span>}
      </div>
    </div>
  );
};

export default Bio;
