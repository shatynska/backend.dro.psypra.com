import { GetAllResult } from '../../../application';

export class GetAllResponse extends GetAllResult {
  constructor(parameters: GetAllResponse) {
    super();
    Object.assign(this, parameters);
  }
}
