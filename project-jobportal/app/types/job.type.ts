export type TJobCreate = {
  postId: number,
  postProfile: string,
  postDescription: string,
  reqExperience: number
  postTechStack: string[]
};

export type TJob = {
  postId: number,
  postProfile: string,
  postDescription: string,
  reqExperience: number
  postTechStack: string[]
};

export type TErrorResponse = {
  timestamp: string,
  status: number,
  message: string,
  details: {
    postProfile: string,
    postDescription: string,
    reqExperience: string,
    postTechStack: string
  }
}