class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :api_id
      t.string :anime_title
      t.integer :mal_id
      t.string :anime_image
      t.integer :episode_count
      t.string :status
      t.float :score
      t.string :synopsis
      t.string :genre

      t.timestamps
    end
  end
end
