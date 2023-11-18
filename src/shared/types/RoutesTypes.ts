export enum ApplicationRoutes {
  MEDIA,
  CREATE_MEDIA,
}

export const ApplicationRoutesPaths: { [key in ApplicationRoutes]: string } = {
  [ApplicationRoutes.MEDIA]: "/",
  [ApplicationRoutes.CREATE_MEDIA]: "/create",
};
