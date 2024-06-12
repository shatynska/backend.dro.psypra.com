import { GetCoreResult } from '../../../application';

export class GetCoreResponse extends GetCoreResult {
  constructor(parameters: GetCoreResponse) {
    super();
    Object.assign(this, parameters);
  }
}
