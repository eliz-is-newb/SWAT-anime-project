class CreateLrAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :lr_animes do |t|
      t.string "mal_id"
      t.string "anime_image"
      t.string "episodes"
      t.string "lr_anime_title"

      t.timestamps
    end
  end
end
