import { Request, Response } from 'express';
import { UploadZipUseCase } from './UploadZipUseCase';

class UploadZipController {
  private readonly UploadZipUseCase: UploadZipUseCase;

  constructor(uploadZipUseCase: UploadZipUseCase) {
    this.UploadZipUseCase = uploadZipUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const file = request.files;

    if (!file) {
      return response.status(404).json({
        error: 'Nenhum arquivo enviado',
      });
    }

    const { data, statusCode, error } = await this.UploadZipUseCase.execute(
      file,
    );

    if (error) {
      return response.status(statusCode).json({
        error,
      });
    }

    return response.status(statusCode).json(data);
  }
}

export { UploadZipController };
