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
        console.log(schema);
        return schema.medias.all(); //
      });
      this.post("/media", (schema: any, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.medias.create(attrs);
      });
      this.patch("/media/:id", (schema, request) => {
        let media = JSON.parse(request.requestBody);
        return schema.db.medias.update(media.id, media);
      });
      this.delete("/media/:id", (schema, request) => {
        let id = request.params.id;
        schema.db.medias.find(id).destroy();
        return { success: true };
      });
    },
  });
};

export default makeServer;
