import { GetContactsResult } from '../../../application';

export class GetContactsResponse extends GetContactsResult {
  constructor(parameters: GetContactsResponse) {
    super();
    Object.assign(this, parameters);
  }
}
