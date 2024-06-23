import { GetIsPublicResult } from '../../../application';

export class GetIsPublicResponse extends GetIsPublicResult {
  constructor(parameters: GetIsPublicResponse) {
    super();
    Object.assign(this, parameters);
  }
}
