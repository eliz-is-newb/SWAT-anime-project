class AddAnimeIdToGenre < ActiveRecord::Migration[6.1]
  def change
    add_column :genres, :anime_id, :integer

  end
end
