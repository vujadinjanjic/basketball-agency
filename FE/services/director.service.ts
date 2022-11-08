import axios from "axios";

export class DirectorService {
  public static async getDirectors() {
    try {
      const directors = await axios.get("http://localhost:5000/api/directors");
      return directors;
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}
