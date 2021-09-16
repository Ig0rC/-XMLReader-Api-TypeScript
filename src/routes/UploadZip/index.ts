import { Router } from 'express';
import uploadZip from '../../UseCases/UploadZip';

const routes = Router();

routes.post('/upload', (request, response) => {
  uploadZip.handle(request, response);
});

export default routes;
