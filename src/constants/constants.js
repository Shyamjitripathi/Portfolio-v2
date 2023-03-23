export const projects = [
  {
    title: "Continuous Integration Code Pipeline",
    description:
      "Configured a continuous integration code pipeline using CodePipeline to monitor code commits and code build jobs. To ensure that the latest source code is fetched into the pipeline using CodeCommit, I automated triggers within the pipeline.I set up a CodeBuild job using CodeBuild to execute the build process, utilizing CodeArtifact to download dependencies. In addition, I integrated Sonarqube to analyze the code and check for quality gates.I successfully generated and stored resulting artifacts in an S3 bucket, with dependencies downloaded again from CodeArtifact.",
    image: "images/jpgs/code-pipeline.png",
    imageWebp: "images/webps/code-pipeline.webp",
    images: [
      {
        original: "images/projects/code-pipeline/code-pipeline.png",
        loading: "lazy",
        originalAlt: "code-pipeline",
      },
    ],
    tags: [
      "CodePipeline",
      "CodeCommit",
      "CodeBuild",
      "CodeArtifact",
      "S3 Buclet",
    ],
    id: 9,
    order: 100,
    mainType: "cloud-devops",
  },
  {
    title: "Dockerized Service Customization Workflow",
    description:
      "Code from a Git repository and customized nginx, tomcat, and mysql services using Docker. I used Dockerfiles and built customized images using the docker build command. I tested the containers using docker-compose and pushed the images to Docker Hub.",
    image: "images/jpgs/dockerized-service.png",
    imageWebp: "images/webps/dockerized-service.webp",
    images: [
      {
        original: "images/projects/dockerized-service/dockerized-service.png",
        loading: "lazy",
        originalAlt: "docker-service",
      },
    ],
    tags: ["Docker", "Docker-Hub", "Docker-Image"],
    id: 6,
    order: 98,
    mainType: "cloud-devops",
  },
  {
    title: "Cloud Infrastructure Setup and Management with Terraform",
    description:
      "Used Terraform to create and manage cloud infrastructure on a cloud computing platform. I established a VPC with subnets, a bastion host, and security measures. I set up various services with secure access, including EC2 instances, Elastic Cache, Amazon MQ, and Beanstalk.",
    image: "images/jpgs/terraform-cloud.png",
    imageWebp: "images/webps/terraform-cloud.webp",
    images: [
      {
        original:
          "images/projects/terraform-cloud/terraform-cloud.png",
        loading: "lazy",
        originalAlt: "terraform-cloud",
      },
    ],
    tags: [ "Terraform", "VPC", "Bastion-Host", "EC2 Instances","Security-Measures"
    ],
    id: 3,
    order: 94,
    mainType: "cloud-devops",
  },
];

export const TimeLineData = [
  { year: 2019, text: "Joined Bundelkhand University Jhansi started development" },
  { year: 2020, text: "Was learning MERN Stack and developing projects" },
  { year: 2021, text: "Integrated my Web-Dev knowledge with Cloud & DevOps Tech-Stack" },
  { year: 2022, text: "Did one internship and become SIH 2022 Finialist" },
  { year: 2023, text: "Polishing my AWS and DevOps Skills" },
];
