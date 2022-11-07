import axios from "axios";

export class PlayerServicve {
  public static async getPlayers() {
    try {
      const players = await axios.get("http://localhost:5000/api/players");
      return players;
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}
