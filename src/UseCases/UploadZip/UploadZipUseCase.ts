/* eslint-disable */
import xml2 from 'xml2js';
import AdmZip from 'adm-zip';
import { iCustomResponse } from '../../utils/iCustomResponse';

class UploadZipUseCase {
  private xml: any[] = [];

  private readonly parserXML = new xml2.Parser();

  async execute(iUploadZipRequest: any): Promise<iCustomResponse> {
    const teste = iUploadZipRequest[''];

    if (teste.mimetype.slice(12, 15) !== 'zip') {
      return {
        error: 'Tipo de arquivo inválido',
        statusCode: 400,
      };
    }

    const zip = new AdmZip(teste?.data) as any;

    if (!zip) {
      return {
        error: 'ZIP',
        statusCode: 400,
      };
    }

    if (!zip) {
      return {
        error: 'Tipo de arquivo inválido',
        statusCode: 400,
      };
    }

    zip.forEach((zipEntry: any) => {
      if (zipEntry.entryName.indexOf('.xml') !== -1) {
        const xmlFile = zipEntry.getData();
        this.parserXML.parseString(xmlFile, (err: any, files: any) => {
          this.xml.push(files);
        });
      } else {
        this.xml.push({
          fileName: zipEntry.entryName,
          invalid: true,
        });
      }
    });

    return {
      data: this.xml,
      statusCode: 200,
    };
  }
}

export { UploadZipUseCase };
