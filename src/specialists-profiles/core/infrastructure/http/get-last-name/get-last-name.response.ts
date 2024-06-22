import { GetLastNameResult } from '../../../application';

export class GetLastNameResponse extends GetLastNameResult {
  constructor(parameters: GetLastNameResponse) {
    super();
    Object.assign(this, parameters);
  }
}
