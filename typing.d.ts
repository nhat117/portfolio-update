interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
    address: string;
    backgroundInfo: string;
    email:string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
    role: string;
    socialMedias: Image;
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  description: string;
  technologies: Technology[];
  githubLink: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  title: string;
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  companyLogo: Image;
  technologies: Technology[];
}

export interface SocialMedia extends SanityBody {
  _type: "socialMedia";
  title: string;
  url: string;
}
