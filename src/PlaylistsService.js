const { Pool } = require('pg')

class PlaylistsService {
  constructor () {
    this._pool = new Pool()
  }

  async getPlaylists (playlistId) {
    const query = {
      text: `SELECT playlists.* FROM playlists
      LEFT JOIN playlistsongs ON playlistsongs.playlist_id = playlists.id
      WHERE playlistsongs.playlist_id = $1`,
      values: [playlistId]
    }

    const result = await this._pool.query(query)
    return result.rows
  }
}

module.exports = PlaylistsService
