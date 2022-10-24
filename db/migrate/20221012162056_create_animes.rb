textclass CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.text :api_id
      t.text :anime_title
      t.text :mal_id
      t.text :anime_image
      t.text :episode_count
      t.text :status
      t.real :score
      t.text :synopsis
      t.text :genres, array: true, default:[] 

      t.timestamps
    end
  end
end
