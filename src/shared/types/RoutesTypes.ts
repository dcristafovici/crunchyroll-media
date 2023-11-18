export enum ApplicationRoutes {
  MEDIA_LIST,
  CREATE_MEDIA,
}

export const ApplicationRoutesPaths: { [key in ApplicationRoutes]: string } = {
  [ApplicationRoutes.MEDIA_LIST]: "/",
  [ApplicationRoutes.CREATE_MEDIA]: "/create",
};
