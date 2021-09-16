import express, { json } from 'express';
import fileUpload from 'express-fileupload';
import errorHandler from './middleware/errorHandler';
import UploadZip from './routes/UploadZip';

class App {
  public readonly app: express.Application = express();

  constructor() {
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(
      fileUpload({
        uriDecodeFileNames: true,
      }),
    );
    this.app.use(json());
  }

  private routes(): void {
    this.app.use(errorHandler);
    this.app.use('/', UploadZip);
  }
}

export default new App().app;
