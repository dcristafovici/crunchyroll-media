import { Model, createServer } from "miragejs";
import { fixture } from "./fixture";

const makeServer = () => {
  return createServer({
    models: {
      medium: Model,
    },
    seeds(server) {
      fixture.forEach((item) => server.create("medium", item as any));
    },
    routes() {
      this.namespace = "api";
      this.timing = 300;
      this.get("/media", (schema: any) => {
        return schema.media.all().models;
      });
      this.post("/media", (schema: any, request) => {
        const attrs = JSON.parse(request.requestBody);
        const createdMedia = schema.media.create(attrs);
        return createdMedia.attrs;
      });
      this.patch("/media/:id", (schema: any, request) => {
        let media = JSON.parse(request.requestBody);
        return schema.db.mediums.update(media.id, media);
      });
      this.delete("/media/:id", (schema: any, request) => {
        let id = request.params.id;
        schema.media.find(id).destroy();
        return true;
      });
    },
  });
};

export default makeServer;
