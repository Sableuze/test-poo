import { appApi } from '@/services/instances';

class SettingsApi {
  async getAll(): Promise<any> {
    try {
      appApi.get('/tutorials');
    } catch (err) {
      console.log(err);
    }
  }
}
export default SettingsApi;
