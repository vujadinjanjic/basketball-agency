import axios from "axios";

export class ClubServicve {
  public static async getClubs() {
    try {
      const clubs = await axios.get("http://localhost:5000/api/clubs");
      return clubs;
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}
