import { UploadZipController } from './UploadZipController';
import { UploadZipUseCase } from './UploadZipUseCase';

const uploadZipUseCase = new UploadZipUseCase();

const uploadZipController = new UploadZipController(uploadZipUseCase);

export default uploadZipController;
