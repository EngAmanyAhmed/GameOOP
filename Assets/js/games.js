// import {Game} from './details.js';

export class Game {
    constructor(id, title, thumbnail, short_description, genre, platform) {
        this.id = id,
        this.title = title,
        this.thumbnail = thumbnail,
        this.short_description = short_description,
        // game_url,
        this.genre = genre,
        this.platform = platform
        // publisher,
        // developer,
        // release_date,
        // freetogame_profile_url
    }
}
