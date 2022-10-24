class CreateWeeklyTopAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :weekly_top_animes do |t|
    t.string "animeTitle"
    t.string "mal_id"
    t.string "animeImg"
    t.string "score"
      t.timestamps
    end
  end
end
