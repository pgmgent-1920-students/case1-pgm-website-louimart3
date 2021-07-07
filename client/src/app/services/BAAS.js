const DOMAIN = 'https://pgmgent-1920-students.github.io/case1-pgm-website-baas-louimart3';

class BAAS {
  static getCases = async () => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    return jsonData;
  };

  static getCase = async (id) => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData.find(project => project.id === id);
  };

  static getNews = async () => {
    const response = await fetch(`${DOMAIN}/data/news/index.json`);
    const jsonData = await response.json();
    return jsonData;
  };

  static getNewsItem = async (id) => {
    const response = await fetch(`${DOMAIN}/data/news/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData.find(project => project.id === id);
  };


  static getDocenten = async () => {
    const response = await fetch(`${DOMAIN}/data/docenten/index.json`);
    const jsonData = await response.json();
    return jsonData;
  };

  static getStudenten = async () => {
    const response = await fetch(`${DOMAIN}/data/studenten/studenten.json`);
    const jsonData = await response.json();
    return jsonData;
  };

  static getStudents = async (id) => {
    const response = await fetch(`${DOMAIN}/data/studenten/studenten.json`);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData.records.find(project => project.id === id);
  };

}

export default BAAS;
