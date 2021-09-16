import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/Cards/ProjectCard";
function ProjectDasborad() {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <ProjectCard
          name="BSD City Botanical Park"
          category="Public Park"
          loc="Sampora, Cisauk, Tanggerang, Banten"
          owner="PT. Bukit Serpong Damai"
          team="4"
          pm="1"
          status="On Progress"
          date="20 July 2021"
        />
        <ProjectCard
          name="Greenwood Orchid"
          category="Residential Area"
          loc="Widodomartani, Ngemplak, Sleman, YK"
          owner="PT. Barokah Jaya Reality"
          team="4"
          pm="1"
          status="On Progress"
          date="13 August 2021"
        />
      </div>
    </>
  );
}

export default ProjectDasborad;
