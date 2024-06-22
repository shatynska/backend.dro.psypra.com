import { GetFirstNameResult } from '../../../application';

export class GetFirstNameResponse extends GetFirstNameResult {
  constructor(parameters: GetFirstNameResponse) {
    super();
    Object.assign(this, parameters);
  }
}
