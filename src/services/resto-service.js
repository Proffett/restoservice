export default class RestoService {
  url = "http://localhost:3000/menu";


  getMenuItems = async () => {
    const res = await fetch(this.url);
    if(!res.ok) {
      return 'error';
    }
    const result = await res.json();
    return result;
  }
}