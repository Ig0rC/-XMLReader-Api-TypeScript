/* eslint-disable */
import xml2 from 'xml2js';
import AdmZip from 'adm-zip';
import { iCustomResponse } from '../../utils/iCustomResponse';

class UploadZipUseCase {
  private xml: any[] = [];

  private readonly parserXML = new xml2.Parser();

  async execute(iUploadZipRequest: any): Promise<iCustomResponse> {
    this.xml = [];
    const teste = iUploadZipRequest.zipXML;
    

    if (teste.mimetype.slice(12, 28) !== 'x-zip-compressed') {
      return {
        error: 'Tipo de arquivo inválido',
        statusCode: 400,
      };
    }

    const zip = new AdmZip(teste?.data) as any;

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
